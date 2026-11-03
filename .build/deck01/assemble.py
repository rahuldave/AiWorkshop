from pathlib import Path
from copy import deepcopy
from io import BytesIO
from lxml import etree as E
from PIL import Image
import zipfile, posixpath as pp, json

ROOT=Path('/Users/rahul/Projects/AiWorkshop/.build/deck01')
P='http://schemas.openxmlformats.org/presentationml/2006/main'
A='http://schemas.openxmlformats.org/drawingml/2006/main'
R='http://schemas.openxmlformats.org/officeDocument/2006/relationships'
PKG='http://schemas.openxmlformats.org/package/2006/relationships'
CT='http://schemas.openxmlformats.org/package/2006/content-types'
ns={'p':P,'a':A,'r':R}
base=zipfile.ZipFile(ROOT/'bridges.pptx')
src=zipfile.ZipFile(ROOT/'LLMS-original.pptx')
data={n:base.read(n) for n in base.namelist()}
types=E.fromstring(data['[Content_Types].xml'])
src_types=E.fromstring(src.read('[Content_Types].xml'))
overrides={v.get('PartName').lstrip('/'):v.get('ContentType') for v in src_types if v.tag.endswith('Override')}
defaults={v.get('Extension'):v.get('ContentType') for v in src_types if v.tag.endswith('Default')}

def xml(b):return E.fromstring(b)
def encode(r):return E.tostring(r,xml_declaration=True,encoding='UTF-8',standalone=True)
def relpath(part):return pp.join(pp.dirname(part),'_rels',pp.basename(part)+'.rels')
def target(part,path):return pp.normpath(pp.join(pp.dirname(part),path)).lstrip('/')
def newpath(old):return pp.join(pp.dirname(old),'original-'+pp.basename(old))
def add_type(old,new):
    if old in overrides:
        if not any(v.get('PartName')=='/'+new for v in types):E.SubElement(types,'{'+CT+'}Override',PartName='/'+new,ContentType=overrides[old])
    else:
        ext=pp.splitext(new)[1][1:]
        if ext in defaults and not any(v.get('Extension')==ext for v in types):E.SubElement(types,'{'+CT+'}Default',Extension=ext,ContentType=defaults[ext])

copied={}
def copy_part(old):
    if old in copied:return copied[old]
    dest=newpath(old);copied[old]=dest
    data[dest]=src.read(old);add_type(old,dest)
    rp=relpath(old)
    if rp in src.namelist():
        rels=xml(src.read(rp))
        for rel in rels:
            if rel.get('TargetMode')=='External':continue
            child=copy_part(target(old,rel.get('Target')))
            rel.set('Target',pp.relpath(child,pp.dirname(dest)))
        data[relpath(dest)]=encode(rels)
    return dest

def ordered_slides(z):
    main=xml(z.read('ppt/presentation.xml'))
    rels={r.get('Id'):target('ppt/presentation.xml',r.get('Target')) for r in xml(z.read('ppt/_rels/presentation.xml.rels'))}
    return [rels[n.get('{'+R+'}id')] for n in main.find('{'+P+'}sldIdLst')]

base_slides=ordered_slides(base);source_slides=ordered_slides(src)
spec=json.loads((ROOT/'content.json').read_text());provenance=[]
for i,d in enumerate(spec):
    if 'sourceSlide' not in d:
        provenance.append({'slide':i+1,'kind':'new bridge','title':d['title']})
        continue
    old=source_slides[d['sourceSlide']-1];dest=base_slides[i]
    oldroot=xml(src.read(old));newroot=xml(data[dest]);oldtree=oldroot.find('p:cSld/p:spTree',ns);newtree=newroot.find('p:cSld/p:spTree',ns)
    oldrels=xml(src.read(relpath(old)));baserels=xml(data[relpath(dest)])
    notes=[deepcopy(r) for r in baserels if r.get('Type','').endswith('/notesSlide')]
    rels=E.Element('{'+PKG+'}Relationships',nsmap={None:PKG})
    for r in oldrels:
        if r.get('Type','').endswith('/notesSlide'):continue
        r=deepcopy(r)
        if r.get('TargetMode')!='External':r.set('Target',pp.relpath(copy_part(target(old,r.get('Target'))),pp.dirname(dest)))
        rels.append(r)
    for j,r in enumerate(notes):r.set('Id','rIdBridgeNotes'+str(j));rels.append(r)
    if not d.get('preserve'):
        keep=set(d['keep'])
        for obj in list(oldtree):
            if obj.tag in ['{'+P+'}nvGrpSpPr','{'+P+'}grpSpPr']:continue
            c=obj.find('.//p:cNvPr',ns)
            if c is None or int(c.get('id')) not in keep:oldtree.remove(obj)
        for edit in d.get('imageEdits',[]):
            obj=next(o for o in oldtree if o.find('.//p:cNvPr',ns) is not None and int(o.find('.//p:cNvPr',ns).get('id'))==edit['id'])
            fill=obj.find('p:blipFill',ns);crop=fill.find('a:srcRect',ns)
            if crop is None:crop=E.Element('{'+A+'}srcRect');fill.insert(1,crop)
            for k in ['l','t','r','b']:crop.set(k,str(edit.get('crop',{}).get(k,int(crop.get(k,'0')))))
            rid=fill.find('a:blip',ns).get('{'+R+'}embed')
            img=next(r for r in oldrels if r.get('Id')==rid)
            iw,ih=Image.open(BytesIO(src.read(target(old,img.get('Target'))))).size
            ar=iw*(1-(int(crop.get('l'))+int(crop.get('r')))/100000)/(ih*(1-(int(crop.get('t'))+int(crop.get('b')))/100000))
            w=min(edit['w'],edit['h']*ar);h=w/ar
            x=edit['x']+(edit['w']-w)/2;y=edit['y']+(edit['h']-h)/2
            xfrm=obj.find('p:spPr/a:xfrm',ns)
            for tag,attrs in [('off',{'x':round(x*9525),'y':round(y*9525)}),('ext',{'cx':round(w*9525),'cy':round(h*9525)})]:
                el=xfrm.find('{'+A+'}'+tag)
                for k,v in attrs.items():el.set(k,str(v))
    for tag in ['timing','transition']:
        for el in oldroot.findall('{'+P+'}'+tag):oldroot.remove(el)
    if d.get('preserve'):
        # Keep the original text and artwork, with the workshop's readable font.
        for sp in oldtree.findall('p:sp',ns):
            label=''.join(sp.findall('.//a:t',ns)[0].itertext()) if sp.findall('.//a:t',ns) else ''
            size='7350' if label==d['title'] else '5850'
            for para in sp.findall('.//a:p',ns):
                ppr=para.find('a:pPr',ns)
                if ppr is None:ppr=E.Element('{'+A+'}pPr');para.insert(0,ppr)
                default=ppr.find('a:defRPr',ns)
                if default is None:default=E.SubElement(ppr,'{'+A+'}defRPr')
                props=[default]+list(para.findall('a:r/a:rPr',ns))+list(para.findall('a:endParaRPr',ns))
                for prop in props:
                    prop.set('sz',size)
                    for script in ['latin','ea','cs']:
                        font=prop.find('{'+A+'}'+script)
                        if font is None:font=E.SubElement(prop,'{'+A+'}'+script)
                        font.set('typeface','Arial')
    maxid=max([int(c.get('id')) for c in oldtree.findall('.//p:cNvPr',ns)]+[1])
    for obj in newtree:
        if obj.tag in ['{'+P+'}nvGrpSpPr','{'+P+'}grpSpPr']:continue
        obj=deepcopy(obj)
        for c in obj.findall('.//p:cNvPr',ns):maxid+=1;c.set('id',str(maxid))
        oldtree.append(obj)
    data[dest]=encode(oldroot);data[relpath(dest)]=encode(rels)
    provenance.append({'slide':i+1,'kind':'original slide' if d.get('preserve') else 'adapted original slide','source':'LLMS.key','sourceSlide':d['sourceSlide'],'title':d['title']})

# Register the copied masters. The slides keep their original layouts.
pres=xml(data['ppt/presentation.xml']);prels=xml(data['ppt/_rels/presentation.xml.rels'])
ml=pres.find('p:sldMasterIdLst',ns)
if ml is None:ml=E.Element('{'+P+'}sldMasterIdLst');pres.insert(0,ml)
existingids=[int(el.get('id')) for el in ml]
for old,new in list(copied.items()):
    if '/slideMasters/' not in old or not old.endswith('.xml'):continue
    rid='rIdOriginalMaster'+str(len(ml));E.SubElement(prels,'{'+PKG+'}Relationship',Id=rid,Type=R+'/slideMaster',Target=pp.relpath(new,'ppt'))
    sid=max(existingids+[2147483647])+1;existingids.append(sid)
    E.SubElement(ml,'{'+P+'}sldMasterId',id=str(sid),attrib={'{'+R+'}id':rid})
data['ppt/presentation.xml']=encode(pres);data['ppt/_rels/presentation.xml.rels']=encode(prels);data['[Content_Types].xml']=encode(types)
if 'docProps/core.xml' in data:
    core=xml(data['docProps/core.xml'])
    dc='http://purl.org/dc/elements/1.1/'
    for name,value in [('title','Embeddings and language models'),('creator','Rahul Dave'),('subject','AI training workshop, session 1')]:
        el=core.find('{'+dc+'}'+name)
        if el is None:el=E.SubElement(core,'{'+dc+'}'+name)
        el.text=value
    data['docProps/core.xml']=encode(core)
out=ROOT/'candidate.pptx'
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
    for n,b in data.items():z.writestr(n,b)
(ROOT/'provenance.json').write_text(json.dumps(provenance,indent=2)+'\n')
print(json.dumps({'candidate':str(out),'slides':len(spec),'reusedSlides':sum('sourceSlide' in d for d in spec),'copiedNativeParts':len(copied)}))
