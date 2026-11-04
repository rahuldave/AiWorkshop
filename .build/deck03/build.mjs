import fs from 'node:fs/promises';
import path from 'node:path';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const workspace = path.resolve(import.meta.dirname, '../..');
const dir = import.meta.dirname;
const p = Presentation.create({slideSize:{width:2560,height:1440}});
const source = 'sources/work/LLMAndPrompt.key';
const credcore = 'sources/credcore/Extracting Information from Contracts.md';
const prompting = 'https://learn.chatgpt.com/docs/prompting';
const examples = 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices';
const book = 'https://www.llm-book.com/';
const figures = 'Diagram: Jay Alammar and Maarten Grootendorst, from the original teaching deck';

const slides = [
  {title:'AI tools and\nprompt engineering', cover:true, subtitle:'AI training workshop\nRahul Dave', time:1,
   notes:'Introduce the practical session. Prompt engineering means writing and testing requests to an AI model. Participants will extract facts from a short document. They will check the answers and revise a prompt. Use an approved chat assistant for the exercise. The practice text is fictional.'},
  {title:'Writing and document questions', body:['Turn rough notes into a draft.','Extract facts with supporting passages.'], time:1,
   notes:'Invite participants to recall a task from the agency session. A short writing task can show how audience and format affect a response. Document extraction gives the group a task with answers they can check. Source: '+source+', slides 33 to 38; '+credcore+'.'},
  {title:'Tools for different kinds of work', table:{widths:[700,750,770],size:59,values:[['Work','Feature','Example result'],['Writing and revision','Chat','A draft from rough notes'],['Questions about a document','File input or document search','A fact and its source passage'],['Current information','Web search','A summary with dated sources']]}, foot:'ChatGPT and Gemini are examples. Features depend on the account and workspace.', time:3,
   notes:'Show the input and response areas of the approved assistant. Point out file input and search if those features are available. File input supplies material for a response. Web search finds current sources. Open an original source before relying on its summary. Use the fictional practice text for the demonstration. Reference date. 3 November 2026. Sources: '+prompting+'; https://learn.chatgpt.com/docs/web-search; https://support.google.com/gemini/answer/14903178?hl=en.'},
  {title:'A prompt is a request', body:['Describe the task and the result you need.'], quote:'Turn these notes into a brief update for our team.', foot:'A short prompt can be enough for a simple task.', time:1,
   notes:'Connect the word prompt to a familiar request. The request states the work and the audience. More detail helps when it changes the result. A rigid formula is unnecessary for every task. Source: '+prompting+'.'},
  {title:'The parts of a useful prompt', labels:[['Task','The work the model should do'],['Context','The information it can use'],['Output','The form the answer should take'],['Checks','The conditions the answer must meet']], time:3,
   notes:'Define context as the information available for the current response. Define output as the response or file the model returns. Use the same terms throughout the session. For a document task, a check can require a quote for each answer. Source: '+source+', slides 34 and 35; '+credcore+'.'},
  {title:'Instructions and output format', sourceSlide:34, keep:[315,316], imageEdits:[{id:315,x:170,y:420,w:1060,h:800},{id:316,x:1320,y:420,w:1060,h:800}], credit:figures, time:2,
   notes:'Use the original movie review example. Both prompts ask the model to label the review as positive or negative. The prompt on the right also shows the form of the answer. LLM means large language model. Point to the instruction, the review text, and the answer. Source: '+source+', slide 34. Figure reference: '+book+'.'},
  {title:'A prompt with useful details', labels:[['Task','Rewrite these notes for the project team.'],['Context','The launch moved to 12 May. Priya owns the draft.'],['Output','Write three short bullets.'],['Checks','Keep the date and owner unchanged.']], foot:'Illustrative example', time:3,
   notes:'Read the request as one prompt. The names and date belong to a fictional example. Explain that the audience affects wording and the output instruction affects format. The check protects details that the writer must preserve. Invite one participant to name a useful detail for their own task. Source: '+source+', slides 34 and 35.'},
  {title:'Examples show the pattern', sourceSlide:36, keep:[323], imageEdits:[{id:323,x:230,y:370,w:1310,h:900,crop:{l:49500,r:6000,t:16000,b:10000}}], side:['Examples pair a review with a label.','The final review has no label.'], credit:figures, time:2,
   notes:'Explain the familiar food reviews. An example pairs an input with the kind of answer we want. Ask participants to label the final review. Discuss how an example can also show a preferred writing style. In a prompt, label examples separately from the new input. Source: '+source+', slide 36. Guidance: '+examples+'. Figure reference: '+book+'.'},
  {title:'An example for missing information', table:{widths:[1360,860],size:64,values:[['Input','Requested course date'],['The course starts on 12 May.','12 May'],['Registration opens soon.','Not stated']]}, foot:'Examples can show how to handle a missing fact.', time:2,
   notes:'The two sentences are fictional examples. The second sentence does not contain a course date. An example can demonstrate when the response should say that information is missing. Examples may guide the result, but they do not guarantee correctness. Source: '+source+', slide 36; '+credcore+'.'},
  {title:'Earlier messages can affect the answer', sourceSlide:43, keep:[350], imageEdits:[{id:350,x:260,y:380,w:2040,h:850}], foot:'Conversation history supplies context for later replies.', credit:figures, time:2,
   notes:'Explain how the earlier name appears in the later reply on the right. The figure illustrates conversation history. It does not describe every product memory feature. Earlier messages can also carry an outdated assumption into a new task. Restate the details for the current task when needed. Source: '+source+', slide 43. Figure reference: '+book+'.'},
  {title:"Credcore's document task", body:['Extract a requested fact from a contract.','Keep the passage that supports the answer.'], foot:'A person checks the result against the document.', time:2,
   notes:'Introduce the case from the supplied Credcore work. A contract can contain many definitions and related sections. The task starts with a specific fact and the passages needed to interpret it. Keep the connection to evidence visible. The workshop exercise uses a shorter fictional document. Source: '+credcore+'.'},
  {title:'Relevant passages become context', image:{file:'sources/credcore/assets/ragidea.png',x:260,y:390,w:1270,h:820}, side:['Retrieval finds relevant passages.','The model uses them to write an answer.'], foot:'Retrieval augmented generation is often called RAG.', credit:'Diagram: Chip Huyen, AI Engineering, reproduced in the Credcore notes', time:3,
   notes:'Follow the original diagram from the question to the document search and then to the response. Retrieval means finding relevant source material. RAG combines retrieval with generation from that material. Related definitions and exceptions may also be needed. Retrieval can miss a passage, so the answer still needs a check. Source: '+credcore+' and its credited ragidea.png.'},
  {title:'Practice document', document:true, foot:'Fictional text for the workshop exercise', time:2,
   notes:'Give participants the practice text from the companion handout. The labels Page 1 and Page 2 belong to the fictional text. Both fees are per participant. The payment period begins on receipt of the invoice. The document does not state a minimum group size. Let participants read the passage before continuing.'},
  {title:'A broad summary request', firstAttempt:true, time:2,
   notes:'The draft is an illustrative answer, not a recorded model response. Ask the group to identify what the draft leaves out. It omits the partner fee and the event that starts the payment period. A broad summary request leaves the desired fields unclear. The next slide makes the request specific.'},
  {title:'A document extraction prompt', prompt:['Extract the standard fee, partner fee, payment deadline, and minimum group size.','Use only the supplied document.','Return a table with the field, answer, quote, and page.','If the document gives no answer, write "Not stated".','Keep the two fees separate.'], time:3,
   notes:'Read the prompt and point out the task, source boundary, format, and check for missing information. The requested quote and page make the answer easier to inspect. A requested citation can still be wrong. The person must compare each quote with the document. Source: '+credcore+'; '+source+', slides 34 to 38.'},
  {title:'Practice in pairs', body:['Copy the practice text into your approved chat assistant.','Run a prompt of your own.','Check every answer against the document.','Change one instruction and run it again.'], foot:'Eight minutes. Keep both prompts and both answers.', size:69, time:8,
   notes:'Use two minutes to copy the text and write a first prompt. Use three minutes to run it and compare the answer with the document. Use three minutes to revise one instruction and run it again. Participants can work in pairs with one device. If an account is unavailable, compare prompts on paper. Keep the answer table hidden until the exercise ends.'},
  {title:'An answer with supporting passages', table:{widths:[460,590,930,240],size:52,height:790,y:420,values:[['Field','Answer','Supporting quote','Page'],['Standard fee','$600 per participant','The standard fee is $600 per participant.','1'],['Partner fee','$450 per participant','The fee for partner organizations is $450 per participant.','1'],['Payment deadline','20 calendar days after receipt','Invoices are due within 20 calendar days of receipt.','2'],['Minimum group size','Not stated','No supporting passage','None']]}, foot:'Worked answer for the fictional practice document', time:2,
   notes:'Reveal the worked answer after the exercise. The table is an answer key for the fictional document, not a claim about a real agreement. Ask participants to compare each field with their own result. No passage supports a minimum group size. The payment answer must retain the event that starts the period.'},
  {title:'Checking an answer', labels:[['Task','Every requested field appears.'],['Evidence','Each quote supports its answer.'],['Exceptions','The two fees stay separate.'],['Missing facts','Unstated details stay "Not stated".']], time:3,
   notes:'Apply the checks to an answer from the exercise. Use the checks to describe an error precisely. A fluent answer may still omit a condition or invent a missing detail. Ask each pair to report one correction. Source: '+credcore+'; sources/work/evalnotions.pdf, printed pages 138 to 142.'},
  {title:'A revision for a missing condition', labels:[['Observed error','The answer says "20 days".'],['Missing detail','The period starts when the invoice arrives.'],['Prompt revision','State when each payment period begins.']], foot:'Test the revision on the same document. Compare the answers.', time:2,
   notes:'Use the payment deadline as an illustrative error. The original text says within 20 calendar days of receipt. Change one instruction so the effect is easier to inspect. A change that helps one document may fail on another. Try other documents before keeping the prompt for repeated work. Source: '+credcore+'; '+source+', slide 38.'},
  {title:'Prompt versions and results', sourceSlide:38, keep:[332], imageEdits:[{id:332,x:170,y:430,w:2220,h:760}], foot:'The record connects each result to the prompt that produced it.', credit:'Screenshot from Rahul Dave\'s Credcore work, LLMAndPrompt.key, slide 38', time:2,
   notes:'Show the prompt version column and the separate result rows in the original screenshot. The screen records two prompt versions on the same input. The screenshot alone does not establish which version works better. Explain that participants can start with a document that records the prompt, answer, and review. Source: '+source+', slide 38.'},
  {title:'AI can help check an answer', prompt:['Compare the answer with the document.','For each field, report supported, unsupported, or missing.','Quote the passage behind each judgment.'], foot:'Give the checker the document and the answer.', time:2,
   notes:'An AI judge is a model that checks another model\'s answer. The instructions define what the checker should examine. A request for a score alone leaves the meaning of the score unclear. The checker also needs the source material. Source: '+credcore+'; sources/work/evalnotions.pdf, printed pages 138 to 142.'},
  {title:'An AI judge', image:{file:'sources/credcore/assets/aijudge.png',x:160,y:430,w:2240,h:700}, foot:'People compare the judge\'s feedback with their own reviews.', credit:'Diagram: Chip Huyen, AI Engineering, reproduced in the Credcore notes', time:2,
   notes:'Follow the diagram from the answer and the criteria to the score. The diagram names GPT-4 as its historical example. The workshop does not recommend that model for a new system. In the Credcore case, experts compare their reviews with the judge\'s feedback and revise its instructions. Agreement on a few examples does not establish correctness on every document. Source: '+credcore+'; sources/work/evalnotions.pdf, printed pages 140 to 142.'},
  {title:'Limits of an AI judge', body:['A second model can repeat the first model\'s mistake.','Important answers need review against the original source.'], foot:'A check must test the answer against clear criteria.', time:2,
   notes:'Keep the limit concrete. A checker can overlook the same exception as the first model or assign a score without sufficient evidence. Compare its judgments with reviews from people who know the task. Use those disagreements to improve the check. Source: sources/work/evalnotions.pdf, printed pages 141 to 145; '+credcore+'.'},
  {title:'A prompt for your own task', labels:[['Task','Describe one result you need.'],['Context','Supply the information needed for that result.'],['Output','Choose a form you can use.'],['Checks','State how you will judge the answer.']], foot:'An example can show the pattern you want.', time:3,
   notes:'Give participants a minute to adapt the prompt to a task from their own work. Invite one person to read the task and its check. Keep the task small enough to review. Save the prompt with a result that passed the check. Source: '+source+', slides 34 to 38; '+credcore+'.'},
  {title:'Next session: AI agents', body:['An agent can use tools during a task.','We will follow a search across several documents.'], foot:'The task and the checks still come from us.', time:2,
   notes:'Connect the session to the Credcore comparison example reserved for Deck 4. The next session will show document lookup, searches, and follow-up retrieval. End with a brief invitation for questions about the exercise. Sources: sources/work/compar.md; '+source+', slides 49 to 53.'},
  {title:'Sources and further reading', resources:true, time:0,
   notes:'Primary teaching source: Rahul Dave, LLMAndPrompt.key, slides 34, 36, 38, and 43. Case source: Rahul Dave, Extracting Information from Contracts. Prompt and conversation figures appear in the original teaching deck. Book reference. Jay Alammar and Maarten Grootendorst wrote Hands-On Large Language Models. '+book+'. The supplied Credcore notes credit the retrieval and judge figures to Chip Huyen, AI Engineering. Evaluation background: the supplied evalnotions.pdf excerpt, chapter 3, printed pages 138 to 145. Reference date. 3 November 2026. Tool and prompting sources. '+prompting+'; '+examples+'; https://learn.chatgpt.com/docs/web-search; https://support.google.com/gemini/answer/14903178?hl=en. All practice text and worked answers are fictional teaching examples.'}
];

function text(s,name,content,x,y,w,h,size=78,color='#24282e',bold=false){
  const sh=s.shapes.add({geometry:'textbox',name,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
  sh.text=content;
  sh.text.style={typeface:'Arial',fontSize:size,color,bold,wrap:'square',autoFit:'none',insets:0,verticalAlignment:'top'};
  return sh;
}
function notesParagraphs(str){
  const sentences=str.split(/(?<=[.!?])\s+/);
  const chunks=[];
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
      const cell=t.getCell(r,c);
      cell.fill=r===0?'#edf1f5':'#ffffff';
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
    if(d.body)d.body.forEach((line,j)=>text(s,`body-${j}`,line,170,450+j*170,2220,145,d.size??78));
    if(d.quote)text(s,'prompt-example',d.quote,170,780,2150,230,92,'#355e92');
    if(d.labels)d.labels.forEach(([label,line],j)=>{
      text(s,`label-${j}`,label,170,420+j*205,480,140,65,'#355e92');
      text(s,`detail-${j}`,line,720,420+j*205,1630,175,69);
    });
    if(d.prompt)d.prompt.forEach((line,j)=>text(s,`prompt-line-${j}`,line,190,415+j*174,2190,150,65,'#24282e'));
    if(d.side)d.side.forEach((line,j)=>text(s,`side-${j}`,line,1670,510+j*325,720,260,64));
    if(d.table)table(s,d.table);
    if(d.document){
      text(s,'page-one','Page 1. Booking terms',170,380,2200,90,57,'#355e92');
      text(s,'page-one-text','The course starts on 12 May.\nThe standard fee is $600 per participant.\nThe fee for partner organizations is $450 per participant.',170,505,2220,300,65);
      text(s,'page-two','Page 2. Payment terms',170,880,2200,90,57,'#355e92');
      text(s,'page-two-text',"Invoices are due within 20 calendar days of receipt.\nCancellation requires 10 calendar days' notice.",170,1005,2220,230,65);
    }
    if(d.firstAttempt){
      text(s,'prompt-label','Prompt',170,395,2200,85,53,'#355e92');
      text(s,'broad-prompt','Summarize the booking terms.',170,520,2220,130,91);
      text(s,'draft-label','Illustrative answer',170,790,2200,85,53,'#355e92');
      text(s,'draft-answer','Participants pay $600 and have 20 days to pay.',170,920,2220,230,85);
    }
    if(d.image){
      const bytes=await fs.readFile(path.join(workspace,d.image.file));
      s.images.add({blob:bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),contentType:'image/png',alt:d.title,fit:'contain',position:{left:d.image.x,top:d.image.y,width:d.image.w,height:d.image.h}});
    }
    if(d.foot)text(s,'foot',d.foot,170,d.table?1290:1260,2210,95,47,'#5e636b');
    if(d.credit)text(s,'source-credit',d.credit,170,1370,2210,50,29,'#62676e');
    text(s,'page-number',String(i+1),2430,1370,90,50,29,'#62676e');
    if(d.resources){
      const refs=[
        ["Rahul Dave's teaching slides and Credcore notes",'https://github.com/rahuldave/AiWorkshop/tree/main/sources'],
        ['Alammar and Grootendorst, Hands-On Large Language Models',book],
        ['Chip Huyen, AI Engineering','https://huyenchip.com/books/'],
        ['Official prompting guidance',prompting]
      ];
      refs.forEach(([label,url],j)=>{
        const sh=text(s,`source-${j}`,label,170,430+j*200,2220,170,66,'#355e92');
        sh.text.get(label).link={uri:url,isExternal:true};
      });
    }
  }
  s.speakerNotes.text=`Time: ${d.time} minutes.\n\n${notesParagraphs(d.notes)}`;
}
await fs.writeFile(path.join(dir,'content.json'),JSON.stringify(slides,null,2)+'\n');
await fs.writeFile(path.join(dir,'authored-prose.md'),slides.map(d=>{
  const parts=[...(d.body??[]),d.quote??'',...(d.labels??[]).map(([a,b])=>`${a}. ${b}`),...(d.prompt??[]),...(d.side??[]),d.foot??'',d.notes];
  return `## ${d.title.replaceAll('\n',' ')}\n\n${parts.filter(Boolean).map(v=>notesParagraphs(v)).join('\n\n')}`;
}).join('\n\n'));
await (await PresentationFile.exportPptx(p)).save(path.join(dir,'bridges.pptx'));
console.log(JSON.stringify({slides:slides.length,adaptedOriginals:slides.filter(s=>s.sourceSlide).length,minutes:slides.reduce((sum,s)=>sum+s.time,0)}));
