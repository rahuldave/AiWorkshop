# State of AI

## Outline

- How do LLMs work?
- Various Trainings
- What is their impact?
- Generic Workflow
- Multi-agent and Human-in-the-loop
- Reasoning and scaling reasoning

## How do LLMs work

- next token prediction. Represent each token as a vector in its context, called an embedding
- a token is a word, or a part of a word, or a xml/html like tag, for structure
- consist of multiple transformer banks
- each bank has an attention module, a memory module, and a skip connection, thus learns vector differences
- can be used for multiple tasks like classification, summarization, NER, or for generation of tokens, where it can be specialized for many tasks. Pure LLM tasks can use contrastive training too
- can extend from language to other modalities (VLMs). The addition there is contrastive training of embeddings of images/movies/etc with language embeddings in the same space.
- The way LLMs work is by interpolating between their memories and new information using the attention mechanism.
- All machine learning is utility optimization

## Various trainings

- **Continued Pretraining**: self-supervised next token prediction on your domain's documents to understand language structure and do memorization for your domain
- **Supervised Finetuning**: either simple fine-tuning (classification) or instruction fine-tuning to follow instructions to carry out specific tasks, say to write code, or answer financial questions.
- **Preference Finetuning with RLHF**(DPO): Have the model generate multiple outputs, have a human choose the best, and train the model on the human choice
- **Verifiable Rewards Scoring**(RLVR): Instead of multiple outputs, train in domains for reasoning where you can verify outputs like math and code. This picks up reasoning skills which transfer to other domains.

## Impact of LLMs

- taking over a lot of "junior" white collar work
- estimate retrenchments of about 30% overall
- winners will be those who use llm's well, to code, to write, to do processes
- will automate lot of checking work, text/agreement/legal/code/contract construction  and understanding
- because attention and interpolation is not creation LLM's struggle with new stuff, so creative aspects of work are more safe, but reasoning models are attemting to train parts of the creative process in
- moves humans up the creative/intelligence stack but also increases the need for human supervision/criticism/critical thinking: a domain rich manager or teacher will do best
- people with good decision making instincts, risk takers, critical thinkers still needed: those who do decision theory instinctively
- Give me AGI on 1500 calories and then we'll talk.

## Generic Workflow

Say you are an insurance/c-card/etc company and want to equip agents to talk to customers better. You will:

1. Index all your documents and customer-conversations using phrases and semantics (embeddings).
2. Use the RAG pattern and include relevant documents in the "context" of a query  you make to a LLM. You may want to limit your query to the AI to this context, and have it be able to tell you which sources in the context you used. (one of our secret sauces)
3. If you are sophisticated enough use a better RAG technique like Colbert, or use your domain knowledge and understanding of the graph structure of your documents and domain to improve the context. (One of our secret sauces)
4. At one level up you will use agents, both machine and human to improve, personalize, and make up-to-date your context (say, an interest rate hike) (Another of our secret sauces)
5. At another level up you will use reasoning models, perhaps combined with agents intervening at points in the reasoning traces, to carry out reasoning tasks to help your agents. This is cutting edge research (coming soon)
6. Both regular and reasoning models can be used as LLM judges. LLMs can be used for search and research, data generation, as well as judging the output of other LLMs. This LLM as judge helps humans evaluate how the original LLM did on, say responding to an agent's request. (one of our secret sauces)
7. What model did you use? You might have used a commercial model such as claude, or modified an open-source mopdel to your requirements via continued pre-training, supervized fine tuning (by seeing what question-answer pairs were useful to your agents over time), preference fine-tuning (explicitly asking your agents to choose between responses), or verifiable-reward fine tuning of reasoning models (asking agents to give explicit points to answers). Generally you will start with just prompting, and then move on to particularizing a model to your applications.
8. Your UX will probably use a bunch of models to comprise the full experience

## Multi-agent and Human

Often you need uptodate information. Or you need the LLM to call out to an external tool. Think IFTTT or Zapier, but with a LLM. 

- For this you need an agentic platform and tool. You want to make LLM calls, maybe run code, wait for a human to approve, then move forward, call another llm, get info from a website or API (like current interest or insurance rates)
- We internally uses this for multiple processes in our pipeline, and in our example, this could be used to orchestrate agent feedback. In other words the same processes can be used to improve one's models
- There might be multiple such agents, all sharing a common information base, and all communications via a shared writeboard.
- The process orchestrating these agents must have smarts about the entire job as well, so that it can backtrack on bad results, make dynamic dispatches, whatever is needed.

## Reasoning 

- deepseek R1 has created lots of excitement by sharing its reasoning traces under "think" tags.  Reasoning goes to the next level, can we have the model learn to reason rather than just interpolate its memories
- can we drive this reasoning, by correcting it, interjecting in between, or even introduce agents into the reasoning steps to create a very powerful autonomous, multi-agent system
- but more simply, can we use reasoning traces to improve model performance, both in extraction and response tasks, as well as in llm as judge tasks
- The idea here is to move tasks that we expect domain experts to do up the value chain. If a model can get most of the way in reasoning on the choice of an insurance plan or a contract, the expert is freed to look at the big picture, or understand/introduce edge cases. I call this "oving up the pareto optimality frontier".