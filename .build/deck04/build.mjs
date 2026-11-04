import fs from 'node:fs/promises';
import path from 'node:path';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const workspace=path.resolve(import.meta.dirname,'../..');
const dir=import.meta.dirname;
const p=Presentation.create({slideSize:{width:2560,height:1440}});
const teaching='sources/work/LLMAndPrompt.key';
const comparison='sources/work/compar.md';
const pipeline='sources/work/ExtractionPipeline.md';
const controls='sources/point32/presentations/technical/index.qmd';
const agents='https://www.anthropic.com/engineering/building-effective-agents';
const book='https://www.llm-book.com/';
const slides=[
  {title:'AI agents\nThe name is Bond',cover:true,subtitle:'AI training workshop\nRahul Dave',time:1,
   notes:'Introduce the session on agents. The task from the previous session now extends across several documents. Participants will follow a saved Credcore search sequence and choose a next action in a short exercise. The title comes from the workshop agenda.'},
  {title:"An agent's next action",body:['An agent uses a model and tools to do a task.','Tool results can guide its next action.'],foot:'A tool can search a document, calculate a result, or change a file.',time:2,
   notes:'An agent is a system that uses a model to select actions during a task. A tool is software the system can call. A tool result supplies new information. The system can then take another action or return an answer. Sources: '+teaching+', slides 49 to 51; '+agents+'.'},
  {title:'A tool returns a result',sourceSlide:49,keep:[378],imageEdits:[{id:378,x:240,y:360,w:2080,h:850}],foot:'A calculator returns a number that the model can use.',credit:'Diagram: Jay Alammar and Maarten Grootendorst, from the original teaching deck',time:2,
   notes:'Follow the calculator example in the original figure. The calculator evaluates 47 divided by 12, multiplied by 3.14. The displayed result rounds to 12.2983. A model can still choose the wrong expression or misread a result. The figure illustrates tool use, rather than a guarantee of correctness. Source: '+teaching+', slide 49. Figure reference: '+book+'.'},
  {title:'Results become the next input',sourceSlide:51,keep:[385],imageEdits:[{id:385,x:170,y:350,w:1460,h:930,crop:{t:3000,b:2200}}],side:['The tool result joins the context.','The model can request another action.'],credit:'Figure from Rahul Dave\'s original teaching deck, slide 51',time:2,
   notes:'Follow the loop from the model to the tool and back to the prompt. Context means the information available for the current response. LLM means large language model. The cloud represents connected software services. The system runs the tool and returns its result to the model. Source: '+teaching+', slide 51.'},
  {title:'Fixed steps and agent choices',table:{widths:[1110,1110],size:64,values:[['Defined workflow','Agent'],['The system follows steps set in advance.','The model selects a next action.'],['Retrieve, extract, then check.','Search again when evidence is missing.']]},foot:'A workflow can include an agent.',time:2,
   notes:'A defined workflow sets the order of the work in advance. An agent can select a next action using the results available. People still define its task and available tools. The Credcore extraction notes describe a workflow. The comparison example reports tool use and follow-up searches. Sources: '+pipeline+'; '+agents+'.'},
  {title:'The Credcore comparison task',quote:'Compare protections across three agreements.\nReturn a table with supporting passages.',quoteY:450,quoteSize:91,foot:'Simplified request from a saved run. The original contracts were not rechecked.',time:2,
   notes:'The saved request names the Aurora, Evergreen, and Flexera agreements. It asks about three kinds of contract protection and an overall risk assessment. Focus on the search process and the supporting passages. The workshop does not adopt the saved risk ratings as verified conclusions. The full agreements are outside this source library. Source: '+comparison+'.'},
  {title:'The recorded search sequence',table:{widths:[380,900,940],size:60,values:[['Step','Tool purpose','Reported result'],['1','Find the documents','One matching entry for each filename'],['2 to 4','Search each document summary','Matches for the requested protections'],['5 to 6','Search original passages','More detailed supporting text']]},foot:'Steps summarized from the saved run account',time:3,
   notes:'Read the sequence without teaching the index names. A summary is a shorter account of document content. The source calls the six numbered steps turns. Step 1 looks up document identifiers. Steps 2 to 4 search the summaries for each agreement. Steps 5 and 6 search paragraph text for more detail. The saved account reports these actions, but it does not contain the complete tool inputs and outputs. Source: '+comparison+', the six numbered entries under Answer.'},
  {title:'Follow-up searches for evidence',labels:[['Initial search','Find a summary of the requested protection.'],['Follow-up','Find original passages and related definitions.']],foot:'The saved account reports deeper searches in steps 5 and 6.',time:2,
   notes:'Explain why the first result may leave a detail unresolved. The account then reports searches for original passages. Its search phrases include material intellectual property and release of guarantor. Participants do not need to learn those legal terms. The lesson concerns a follow-up search for evidence. Source: '+comparison+', turns 5 and 6.'},
  {title:'An answer needs source locations',table:{widths:[580,1290,350],size:60,values:[['Document','Reported section','Page'],['Aurora','6.05. Limitation on Restricted Payments','196'],['Evergreen','12.01. Amendments and Waivers','131'],['Flexera','11.09. Release of Guarantors','276']]},foot:'Source locations listed in the saved answer',time:2,
   notes:'Point to one source location for each document. The saved answer also records paragraph numbers and links to source regions. A reviewer can use those locations to inspect the original text when access is available. A citation still needs a check against its source. The original contracts were not rechecked for this workshop. Source: '+comparison+', references 1, 5, and 8.'},
  {title:'A detail can remain unresolved',sourceSlide:53,keep:[393],imageEdits:[{id:393,x:240,y:410,w:1080,h:810,crop:{l:57200,r:600,t:54500,b:17500}}],side:['The answer leaves a missing amount unresolved.'],foot:'A separate saved Credcore example',credit:'Screenshot from Rahul Dave\'s original teaching deck, slide 53',time:1,
   notes:'The screenshot belongs to a separate comparison of CoreWeave and HLLY material. Point to the unresolved amount in the HLLY column. The example shows how a saved answer can state a limit. It does not verify the other conclusions in the original comparison. Source: '+teaching+', slide 53.'},
  {title:'Review in the extraction workflow',labels:[['Extract','The model returns an answer with source locations.'],['Check','A second model compares it with the source text.'],['Review','A person checks errors and unresolved points.']],foot:'Stages described in the Credcore extraction notes',time:2,
   notes:'Connect the agent example to the extraction workflow from Deck 3. The notes describe retrieval, summaries that retain source locations, extraction, and review. They also describe a second model checking the answer against original text. A judge model can make mistakes. Keep human review for errors and unresolved points. Source: '+pipeline+'; sources/credcore/Extracting Information from Contracts.md.'},
  {title:'Permissions for a document agent',table:{widths:[1110,1110],size:63,values:[['May proceed','Needs approval'],['Read approved documents','Change a document'],['Search approved sources','Send a message to another person'],['Draft a comparison','Publish the result']]},foot:'Example limits. The software must enforce them.',time:2,
   notes:'The table gives an example permission policy for a document assistant. Reading a document and changing it are different permissions. A prompt can describe the limits. The application must also control which actions can run. Point32 materials describe allowed actions, approval gates, and restricted write access. Source: '+controls+', Synthetic Benefits profile examples.'},
  {title:'Stopping conditions',body:['Pause when a required source is missing.','Stop after the agreed search limit.','Ask a person when sources conflict.'],foot:'Define the limits before a run starts.',time:1,
   notes:'An agent needs a stopping rule as well as a goal. Missing or conflicting evidence can require human review. A step limit prevents an open-ended run. Sources: '+controls+', human review triggers; '+agents+'.'},
  {title:'The next action',labels:[['Context','The booking summary lists 12 May.'],['New result','A later document reports a changed date.'],['Decision','Choose the next action and a stopping rule.']],foot:'Four minutes in pairs. The agent may read and draft. Sending needs approval.',time:4,
   notes:'The scenario is fictional and continues the workshop booking exercise from Deck 3. An addendum is a later document that changes an earlier document. The agent has seen a search summary but has not opened the addendum. Give pairs two minutes to choose an action. Use two minutes to discuss the evidence and the approval needed before sending an update. A useful next action is to read the addendum and verify the relevant passage.'},
  {title:'A task with clear limits',labels:[['Task','Compare the approved documents.'],['Tools','Read and search those documents.'],['Evidence','Keep passages and source locations.'],['Review','Return a draft for a person to check.']],foot:'Next session. Choose an experiment for your own work.',time:2,
   notes:'Invite participants to name one task an agent could help with. Ask for the tools it needs and the action that should require approval. The task should have a result a person can inspect. Connect those choices to the final session on a small experiment. Sources: sources/work/State of AI.md, Generic Workflow and Multi-agent and Human; '+controls+'.'},
  {title:'Sources and further reading',resources:true,time:0,
   notes:'Teaching figures: Rahul Dave, LLMAndPrompt.key, slides 49, 51, and 53. The calculator figure is from the illustrated language model reference by Jay Alammar and Maarten Grootendorst. '+book+'. Recorded search account. '+comparison+'. Extraction workflow: '+pipeline+'. Permissions and review. '+controls+'. Agent definitions. '+agents+'. The document exercise is fictional. The saved comparison is an account of a run, rather than a complete tool trace. Original contract conclusions were not independently checked.'}
];

function text(s,name,content,x,y,w,h,size=78,color='#24282e',bold=false){
 const sh=s.shapes.add({geometry:'textbox',name,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 sh.text=content;sh.text.style={typeface:'Arial',fontSize:size,color,bold,wrap:'square',autoFit:'none',insets:0,verticalAlignment:'top'};
 return sh;
}
function notesParagraphs(str){
 const sentences=str.split(/(?<=[.!?])\s+/);const chunks=[];
 for(let i=0;i<sentences.length;i+=3)chunks.push(sentences.slice(i,i+3).join(' '));
 return chunks.join('\n\n');
}
function table(s,d){
 const t=s.tables.add({rows:d.values.length,columns:d.values[0].length,left:170,top:d.y??440,width:2220,height:d.height??760,columnWidths:d.widths,values:d.values});
 t.styleOptions={headerRow:false,bandedRows:false,bandedColumns:false};
 t.borders.assign({style:'solid',fill:'#d6dce3',width:1});
 t.cells.block({row:0,column:0,rowCount:d.values.length,columnCount:d.values[0].length}).assign({margins:{left:25,right:25,top:14,bottom:14}});
 for(let r=0;r<d.values.length;r++){
  t.rows[r].height=(d.height??760)/d.values.length;
  for(let c=0;c<d.values[0].length;c++){
   const cell=t.getCell(r,c);cell.fill=r===0?'#edf1f5':'#ffffff';
   cell.text.style={typeface:'Arial',fontSize:d.size??60,color:'#24282e',bold:r===0,wrap:'square',autoFit:'none'};
  }
 }
}
for(const [i,d] of slides.entries()){
 const s=p.slides.add();s.background.fill='#ffffff';
 if(d.cover){
  text(s,'cover-title',d.title,170,380,2250,420,150,'#1b1e23');
  text(s,'cover-subtitle',d.subtitle,180,950,1900,200,58,'#5e636b');
 }else{
  text(s,'slide-title',d.title,150,110,2260,230,98,'#1b1e23');
  if(d.body)d.body.forEach((line,j)=>text(s,`body-${j}`,line,170,450+j*230,2220,200,d.size??76));
  if(d.quote)text(s,'request',d.quote,170,d.quoteY??480,2200,490,d.quoteSize??88,'#355e92');
  if(d.labels)d.labels.forEach(([label,line],j)=>{
   text(s,`label-${j}`,label,170,420+j*205,480,140,65,'#355e92');
   text(s,`detail-${j}`,line,720,420+j*205,1630,175,69);
  });
  if(d.side)d.side.forEach((line,j)=>text(s,`side-${j}`,line,d.sourceSlide===53?1510:1670,510+j*325,d.sourceSlide===53?880:720,260,64));
  if(d.table)table(s,d.table);
  if(d.foot)text(s,'foot',d.foot,170,d.table?1290:1260,2210,100,d.footSize??45,'#5e636b');
  if(d.credit)text(s,'source-credit',d.credit,170,1370,2210,50,29,'#62676e');
  text(s,'page-number',String(i+1),2430,1370,90,50,29,'#62676e');
  if(d.resources){
   const refs=[
    ["Rahul Dave's teaching deck and Credcore notes",'https://github.com/rahuldave/AiWorkshop/tree/main/sources'],
    ['Saved Credcore comparison','https://github.com/rahuldave/AiWorkshop/blob/main/sources/work/compar.md'],
    ['Alammar and Grootendorst, Hands-On Large Language Models',book],
    ['Point32 agent controls','https://github.com/rahuldave/AiWorkshop/blob/main/sources/point32/presentations/technical/index.qmd'],
    ['Anthropic, Building effective agents',agents]
   ];
   refs.forEach(([label,url],j)=>{
    const sh=text(s,`source-${j}`,label,170,405+j*170,2220,145,61,'#355e92');
    sh.text.get(label).link={uri:url,isExternal:true};
   });
  }
 }
 s.speakerNotes.text=`Time: ${d.time} minutes.\n\n${notesParagraphs(d.notes)}`;
}
await fs.writeFile(path.join(dir,'content.json'),JSON.stringify(slides,null,2)+'\n');
await fs.writeFile(path.join(dir,'authored-prose.md'),slides.map(d=>{
 const parts=[...(d.body??[]),d.quote??'',...(d.labels??[]).map(([a,b])=>`${a}. ${b}`),...(d.side??[]),d.foot??'',d.notes];
 return `## ${d.title.replaceAll('\n',' ')}\n\n${parts.filter(Boolean).map(v=>notesParagraphs(v)).join('\n\n')}`;
}).join('\n\n'));
await (await PresentationFile.exportPptx(p)).save(path.join(dir,'bridges.pptx'));
console.log(JSON.stringify({slides:slides.length,adaptedOriginals:slides.filter(d=>d.sourceSlide).length,minutes:slides.reduce((n,d)=>n+d.time,0)}));
