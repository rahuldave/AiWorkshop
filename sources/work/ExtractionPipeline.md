# Data Point Extraction Pipelines

I had been under the impression that we might require a lot of domain hours, but in the last 3 weeks things have moved so fast that my estimations of many many weeks of effort might were wrong. There is also benefit from having Domain deal with an entire document rather than piecemeal with each tearsheet concept: there are syntergies and memory that come from being focussed on the entire document.

But what I want to focus on here is the first part: we dont require that much more domain because on the data-point extraction aspect, we are converging quite fast, so that the "critique" burden on domain does not have to be excessive over what they will have to do anyways to fix the tear sheets etc before they go up in front of clients.

To set the scene, there is one model, but each data-point extraction involves a separate prompt, so the combination (M, P) where M is model and P is prompt is unique. The prompt P is what we send to the model M; it responds with an answer!

## The process involves retrieval, summarization and prompting 2 LLMs...

There are 6 steps in this process:

1. **High Quality Retrieval**: what I am calling the Aniket Graph RAG(AGR), makes sure that the context we are providing to the llm is real high quality, and encompasses everything we need for the extractions. The context if the additional information we provide in P to the model M: typically the model is asked questions about the content of P . The AGR works by keeping connections, or edges in a graph, between sections, definitions and the like in the tusk graph.
2. **Co-ordinate Preserving Summarization**: we "distill" things down to make this context even tighter and smaller for the model, rather than providing all the sections the AGR returns. Crucially, carry the pdf co-ordinates of each of the sections we summarize and pass to the model with us. 
3. **LLM Call with a not-too-specific prompt and Co-ordinate preservation**: Now we let the llm loose on these docs and get a data point extraction. Aniket had this brilliant idea of asking the model which of the included summarized context segments it used. Aniket and I had talked about this a while back and we thought of asking the model to also return the co-ordinates of which section it used, since it carries all the co-ordinate sections in the context.  Now, crucially the prompt is not made too specific. This boosts recall, the fraction of extractions a model would make as compared to a human.
4. **Domain Involvement** Now domain, which has either before this activity, or post this activity made their own extractions, compares the (M,P)'s extractions with their own and we can compute the recall and the precision, which here is the fraction of extractions that the model made which turn out to be correct. This complete extraction from documents is done now for 20 documents..we might add some more, especially those diverse from this *validation set*. In the future, where the model  fails, domain might produce a reasoning. If we used a reasoning LLM here we might have access to the model's inner monologue, and can correct its thinking.
5. **LLM as judge and its unique data**: Now we get the model output (extraction) and the trace-to-source co-ordinates. Using these co-ordinates we can pass ths original-text from which stuff was extracted and summarized, as well as the extraction of the first LLM to a second **LLM-as-judge** and have it opine on how the first LLM did: did it nail the extraction, did it fail the extraction, or it cant say. Essentially the LLM-as judge says, given the ORIGINAL source, was the extraction justified. 
6. This process helps for the case of all the samples the first LLM got wrong because our prompt was too broad (the low precision issue). This happens in 2 ways: (a) our extraction may have returned nothing since not all documents have the same extractions. (b) our broadness in the first LLMs means that multiple data point values are returned for the same data point name, and only one of these is correct and the other are wrong.  Now for (a) we can just remove those data points that were not in the document, and for (b) we whittle down the list of values to just 1. We compare to the ground truth domain gave us, and voila, because a whole bunch of false negatives and empties got eliminated as opposed to the case in point number 3, we have now boosted the precision.  

## Why is this so good? And what are the risks?

By pushing precision to higher 70s while keeping the recall in the low 80s, a large part of what was needed to do is done. And there are some critical original ideas in here (a) very good retrieval based on tusk-graph, and a summarized context enabling the model to attend better over the smaller size (b) the ability to go back right to the original source through careful co-ordinate retention through our own functions and the llm calls (c) intentionally being not too tight with the base llm's prompt so as to keep recall high to start

The risks involved come from robustness and scale. Is 20 documents enough, and wont the performance come down with a greater diversity of documents. It will, but past experience and industry best practices have shown that for large documents such as this, 30 examples may be enough to capture the diversity we want. And we have left a lot of possible optimizations on the table, such as aligning the judge model's reasons for saying the extraction was correct with a human's, although these are time-intensive.

Robustness seeks to de-risk the process by experimenting with more, and local on-prem llms where we have better control over the model weights. Prompting is dependent on model: the same prompt may not work as well with other models. But this is a problem that we would want to tackle after being in production.

## What does this mean for domain?

1. We wont be burdening domain as much...it can work with 17 people! I had not appreciated the quick convergence to good performance across multiple extractions as seen in the recall and precision numbers Aniket quoted: he was pleasantly surprised as well. As i said earlier, I had not anticipated how productive domain would be in sitting with the prompting across a large set of data point extractions, and that there would be synergies uncovered by doing the extraction together.

2. We may want to do a few more documents to get to about 30, and a few rounds of prompt iteration. This can be done after an error analysis to see which extractions do worse and focussing our energies on their prompts, and perhaps in having a even more specialized than usual LLM as a judge ontained by aligning model critiques with human critiques.

3. There are probably asymptotic barriers to precision and recall being better than 90% ad at that at that point domain would be doing the finishing up of the tear sheet anyways. 

4. We will have all the traces from this process so between the llm/llm-as-judge process and what domain has to do to correct extractions we will implicitly gather a lot of fine tuning data

5. The extraction on some other document types was not hard for domain either..they got the hang of the prompting fairly quickly, which leads me to hope that for all the 500 odd (document-type, model, prompt) combinations there is lots of implicit domain expertise shared between these document types, and it will go much productively than my estimation.

   ## Other llm work in the pipeline

   This actually frees Anurag and me to do a lot of ablation experiments, and on our side personnel needs get low as well. 

   1. Now if we get the right llm combo "on-prem" we can get the document processing time and cost (not using openai) down by some factor thus making the overall pipeline faster. 
   2. There are models in tap, in summarization as well for even more ablations
   3. The goal of this is to push the entire end-to-end pipeline recall and precision high enough to reduce Domain's work.
   4. We can figure also train masked completion models on contracts to specialize them, before using them in TAP and the data point extraction pipeline.
   5. We can figure how to best use reasoning pipelines to improve performance.

At 80 precision 80 recall we'll be ready to go in a month. So we go straight to prod. Then we make domain's work less, incrementally. This is fabulous.