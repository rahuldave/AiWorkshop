import fs from 'node:fs/promises';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const dir = '/Users/rahul/Projects/AiWorkshop/.build/deck01';
const p = Presentation.create({slideSize:{width:2560,height:1440}});
const source = '/Users/rahul/Projects/AiWorkshop/sources/work/LLMS.key';
const gpt = 'https://www.3blue1brown.com/lessons/gpt/';
const attention = 'https://www.3blue1brown.com/lessons/attention/';
const mlp = 'https://www.3blue1brown.com/lessons/mlp/';
const slides = [
  {title:'Embeddings and\nlanguage models', subtitle:'AI training workshop\nRahul Dave', cover:true, time:1,
   notes:'Introduce the first session. The aim is to explain how a model represents text and generates an answer. Ask participants to name one task for which they have used AI. Keep the discussion brief.'},
  {title:'How a language model generates text', body:['It turns pieces of text into numbers.','It uses the text around each piece.','It predicts what text can follow.'], time:2,
   notes:'Give an overview of the session. Define a language model as a model that learns patterns in language. Explain that the session focuses on models that generate text. Later slides explain each step. Source: '+gpt},
  {title:'A brief history', rows:[['2013','Word embeddings capture relationships.'],['2017','Transformers use attention to process context.']], foot:'The dates mark selected milestones in a much longer history.', time:2,
   notes:'Language modeling has a long history. These dates mark selected developments, rather than the start of either idea. Explain that word2vec helped make useful word representations practical at scale. The transformer paper proposed a model built around attention. Avoid a list of model names. Sources: https://arxiv.org/abs/1301.3781 and https://arxiv.org/abs/1706.03762'},
  {title:'An embedding is a list of numbers', body:['Models learn the numbers from examples.','The numbers help compare words and passages.'], time:3,
   notes:'An item can be a token, a passage, or an image. For this session, focus on text. A vector is the mathematical name for a list of numbers. Participants do not need vector arithmetic. Explain that training gives the numbers useful relationships. Do not suggest that each number has one clear human meaning. Sources: Hult Embeddings.key, slides 13 to 20; '+gpt},
  {title:'Words as numbers', sourceSlide:17, keep:[219], imageEdits:[{id:219,x:300,y:390,w:1960,h:940,crop:{r:49000,t:27500,b:9000}}], credit:'Visual from Rahul Dave\'s original teaching deck', time:3,
   notes:'Point to the rows of colored values. Each row represents a word. The colors show numerical values. Ask participants to notice similarities between rows. The point is representation, rather than the individual values. The arithmetic example from the source slide is outside this session. Source: '+source+', slide 17. The original figure names GloVe embeddings. https://nlp.stanford.edu/projects/glove/'},
  {title:'Words with related meanings', sourceSlide:18, keep:[222], imageEdits:[{id:222,x:190,y:350,w:2180,h:830}], foot:'Nearby points illustrate similar word use.', credit:'Visual from Rahul Dave\'s original teaching deck', time:3,
   notes:'Point to the groups of related words in the original figure. The picture reduces the representation to a few dimensions so people can see it. The drawing is an illustration. Similarity depends on training and the task. Nearby representations do not establish that a statement is true. Source: '+source+', slide 18.'},
  {title:'The word "bank" depends on context', body:['The river bank was muddy.','The bank approved the loan.'], foot:'Context is the text the model has for its current response.', time:3,
   notes:'Ask participants to explain the meaning of bank in each sentence. The spelling stays the same. The surrounding words make the difference. Use the answers to introduce the need for representations that change with context. Adapted from Hult LanguageModels.key, slide 6.'},
  {title:'One word, several meanings', sourceSlide:27, keep:[257], imageEdits:[{id:257,x:210,y:330,w:850,h:955,crop:{t:0,b:0}}], side:['Context changes','the meaning of "mole".'], credit:'Visual: Grant Sanderson, 3Blue1Brown', time:3,
   notes:'Use the three meanings of mole in the original image. They refer to an animal, an amount in chemistry, and a mark on skin. Do not explain the chemistry calculation. Each example uses the same word with different context. Source: '+source+', slide 27. Original lesson: '+attention},
  {title:'Attention uses the surrounding text', body:['Attention combines information across the text.','The result depends on the current context.'], time:3,
   notes:'Attention is a calculation that combines information from tokens. A token is a piece of text, such as a word or part of a word. Attention gives different weights to different relationships. Avoid comparing attention to human intent. Use the next picture to show the effect. Source: '+attention},
  {title:'The words describe different things', sourceSlide:28, keep:[266], imageEdits:[{id:266,x:160,y:330,w:1450,h:910,crop:{t:18000,b:0}}], side:['Fluffy and blue','describe the creature.','Verdant means green.'], credit:'Visual: Grant Sanderson, 3Blue1Brown', time:4,
   notes:'Read the sentence in the original figure. Explain that verdant means green. Point to the connections that combine fluffy and blue with creature. Then point to verdant and forest. The representation can include information from the words around it. The line drawing illustrates attention. Do not teach the symbols or individual values. Source: '+source+', slide 28. Original lesson: '+attention},
  {title:'Training also stores learned associations', body:['Michael Jordan plays the sport of ...','The model can associate the name with basketball.'], time:3,
   notes:'Let participants complete the sentence before revealing the explanation verbally. Training changes model parameters. Those parameters can encode associations between people and sports. The stored information is not a verified fact database. The example illustrates learned association. It does not fully explain where every fact resides. Source: '+mlp},
  {title:'Context can add several kinds of meaning', sourceSlide:34, keep:[286], imageEdits:[{id:286,x:170,y:340,w:2220,h:940,crop:{t:4500}}], credit:'Visual: Grant Sanderson, 3Blue1Brown. Poem: Robert Frost.', time:3,
   notes:'Read the words around one in the Frost excerpt. Ask which road the word refers to. Explain that the image follows changes in a word representation as context and learned associations contribute information. The arrows are an illustration. Do not teach vector addition. Source: '+source+', slide 34. The clean companion image is in bravenewworld.md. Original lesson: '+gpt},
  {title:'The model repeats these operations', sourceSlide:43, keep:[337], imageEdits:[{id:337,x:170,y:340,w:2220,h:960,crop:{b:12500}}], credit:'Visual: Grant Sanderson, 3Blue1Brown', time:2,
   notes:'Explain that a layer is one processing stage in the model. Repeated stages update the token representations. Attention combines information across tokens. Other operations transform each representation using learned parameters. Do not name the individual matrix operations. Source: '+source+', slide 43. Original lesson: '+gpt},
  {title:'Learning from text', body:['During training, the model predicts what text comes next.','Prediction errors guide changes in the model.'], foot:'Training changes the model. A prompt supplies context for a response.', time:3,
   notes:'Explain one training example with a short unfinished sentence. The model compares its prediction with the next token in the training text. Training changes parameters to improve predictions over many examples. A response during ordinary use does not necessarily retrain the model. Do not imply that next-token training is the only training stage. Source: '+gpt},
  {title:'A token is a piece of text', body:['A token can be a word or part of a word.','Punctuation can also be a token.'], foot:'A language model generates a response one token at a time.', time:2,
   notes:'Define token before showing the generation diagram. Actual token boundaries depend on the tokenizer. The following original figures use words as convenient examples. A comma can also be a token. Avoid implying that every word always uses one token. Source: '+gpt},
  {title:'Generation happens token by token', sourceSlide:22, preserve:true, credit:'Visual: Alammar et al., from Rahul Dave\'s original deck', time:3,
   notes:'Follow the original diagram from the request to Dear, then Sarah. A prompt is the text sent to the model. The generated token joins the text used for the next prediction. Explain the repeated operation, rather than the box labels. Source: '+source+', slide 22. The companion bravenewworld.md credits the generation visuals to Alammar et al.'},
  {title:'Probabilities drive everything', sourceSlide:23, preserve:true, credit:'Visual: Alammar et al., from Rahul Dave\'s original deck', time:3,
   notes:'The bars in the original figure illustrate possible next tokens. Explain that the model assigns probabilities to possible continuations. The generation process then selects a token. Selection can use sampling. The percentages belong to this teaching example and are not a measurement of a current product. Source: '+source+', slide 23; bravenewworld.md.'},
  {title:'Sentence completion', body:['The train arrived at the ...'], foot:'Suggest a next word. Then explain which context would change your answer.', time:4,
   notes:'Give participants a minute to suggest station, platform, or another completion. Add a context such as a model train on a dining table. Invite another completion. The exercise illustrates that several continuations can fit and that new context changes expectations. It does not reproduce a model probability calculation.'},
  {title:'The text we send shapes the response', body:['A prompt is the text we send to the model.','Relevant details can change the answer.'], time:3,
   notes:'Connect the sentence exercise to ordinary use. Give the workshop start time as a detail a person could include in a prompt. Explain that the model can use supplied text while producing an answer. Save prompt recipes, retrieval systems, and tool use for later sessions. Source: bravenewworld.md.'},
  {title:'A fluent answer can still be wrong', body:['Text prediction does not verify a claim.','Important answers need checks against reliable sources.'], time:3,
   notes:'Separate fluent language from factual correctness. A model can produce a plausible sentence with an incorrect name, date, or explanation. Ask participants to name an answer they would check before acting. Save evaluation methods for the tools session. Source: bravenewworld.md and the limits discussion in the original LLMS.key.'},
  {title:'The choices we make with AI', body:['We choose the task and the context.','We decide how to check the answer.'], foot:'Next session: the AI ecosystem we want for ourselves.', time:3,
   notes:'Ask participants to explain embedding, context, or token in their own words. An embedding represents an item with numbers. Context is the available text used for the current response. A token is a piece of text. Use remaining time for questions. Connect the model explanation to human choices in the next session.'},
  {title:'Sources and further viewing', resources:true, time:0,
   notes:'The source presentations are LLMS.key and the Hult decks by Rahul Dave. The narrative source is The Brave New World of AI. The selected source slides are 17, 18, 27, 28, 34, 43, 22, and 23. Grant Sanderson created the 3Blue1Brown lessons on transformers, attention, and learned facts. The supplied narrative credits the generation visuals to Alammar and colleagues. The research papers are Mikolov and colleagues (2013) and Vaswani and colleagues (2017). https://arxiv.org/abs/1301.3781 https://arxiv.org/abs/1706.03762.'}
];

function text(s,name,content,x,y,w,h,size=80,color='#24282e',bold=false){
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
for(const [i,d] of slides.entries()){
 const s=p.slides.add();s.background.fill='#ffffff';
 if(d.cover){
  text(s,'cover-title',d.title,170,380,2250,420,150,'#1b1e23',false);
  text(s,'cover-subtitle',d.subtitle,180,950,1900,200,58,'#5e636b');
 } else if(!d.preserve){
  text(s,'bridge-title',d.title,150,110,2260,230,98,'#1b1e23',false);
  if(d.body)d.body.forEach((line,j)=>text(s,`body-${j}`,line,170,470+j*165,2240,140,78));
  if(d.rows)d.rows.forEach(([year,line],j)=>{text(s,`year-${j}`,year,170,470+j*330,350,160,110,'#4d525a');text(s,`event-${j}`,line,620,490+j*330,1750,200,78);});
  if(d.side)d.side.forEach((line,j)=>text(s,`side-${j}`,line,1660,500+j*135,740,140,66));
  if(d.foot)text(s,'foot',d.foot,170,d.sourceSlide===18?1230:1120,2230,110,52,'#5e636b');
 }
 if(d.credit)text(s,'source-credit',d.credit,170,1360,2240,55,30,'#62676e');
 if(d.resources){
  text(s,'resource-one','Rahul Dave\nOriginal teaching decks and Credcore notes',170,390,2210,200,65);
  const links=[['3Blue1Brown: Transformers',gpt],['3Blue1Brown: Attention',attention],['3Blue1Brown: Learned facts',mlp]];
  links.forEach(([label,url],j)=>{const sh=text(s,`resource-link-${j}`,label,170,690+j*145,2220,120,63,'#355e92');sh.text.get(label).link={uri:url,isExternal:true};});
 }
 s.speakerNotes.text=`Time: ${d.time} minutes.\n\n${notesParagraphs(d.notes)}`;
}
await fs.writeFile(`${dir}/content.json`,JSON.stringify(slides,null,2));
await fs.writeFile(`${dir}/authored-prose.md`,slides.filter(s=>!s.preserve).map((d,i)=>`## ${d.title.replaceAll('\n',' ')}\n\n${(d.body||[]).map(t=>t+'.').join('\n\n')}\n\n${(d.side||[]).map(t=>t+'.').join('\n\n')}\n\n${d.foot||''}\n\n${notesParagraphs(d.notes)}`).join('\n\n'));
await (await PresentationFile.exportPptx(p)).save(`${dir}/bridges.pptx`);
console.log(JSON.stringify({slides:slides.length,originalSlides:slides.filter(s=>s.sourceSlide).length,minutes:slides.reduce((sum,s)=>sum+s.time,0)}));
