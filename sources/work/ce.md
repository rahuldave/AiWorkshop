# Extracting Information from Contracts

Our aim in tear sheets and other such documents is to extract specific pieces of information from contracts and perhaps even make competitions with them. This means that our extractions have to be high fidelity. 

We want to conserve the cycles of domain by making our AI models better and better over time. Here we lay out an approach which not only makes models better over time but makes models that judge these models better as well therefore conserving even more domain cycles. 

## These new-fangled models work by memorizing and paying attention

Machine learning models have existed for a while, but recently there is a lot of excitement about models called generative models which generate text for user-specified tasks. These models are a form of model called a transformer-based model. Transformer-based models have revolutionized  language modeling of all kinds. These models are called **Large Language Models** (LLMs)

A transformer model consists of multiple transformer blocks. Each transformer block has an **attention** part and a **memory** part. The attention part captures concepts such as which words are related to each other, which sentences are related to each other, and so on and so forth within a corpus. The memory part captures facts, such as the fact that Michael Jordan was an incredibly good basketball player. The interplay of these two parts allows us to take various aspects of a topic from the model's memory and relate them to each other in possibly unknown ways, thus mimicking intelligence. 

You have probably chatted with such a model, for example, Chatgpt or Claude, using a web-based interface where you write some text and the model responds. The stuff you write to the model is what is called a **prompt**. Prompts can be much more sophisticated than what we usually write. They can have multiple examples in them, they can have an exhortation to the model to reason step by step, they can have some reasoning steps put in by us to help the model along. The maximum size of the prompt is what is called the **context** of the model. Some models such as the new Qwen models from Alibaba and the Gemini models from google have extremely large context sizes. Most models such as ChatGPT and Claude have a relatively small context size and so you might have found that when you chat with it it it tends to forget what's happening after a while. 

## Prompt Engineering

The art of constructing a prompt that helps you is what's called prompt engineering. It is really more art than engineering and it's a lot of fun to try and figure out. One of the key ways we try and work with this is to start with the prompt, get an answer and see how far that answer is from the answer we want. Based on this, we will rewrite the prompt to be something better. This is called **prompt optimization**. 

So for example, consider that you want to extract a revolver section from a contract. We now already have a nice JSON based text format which will allow us to get information from the contract along with all the definitions and other related information that we might possibly need. What we want to do is to stuff this relevant information into the context and then prompt the model to extract specific details that go into the revolver section of the tear sheet.

## Tinkering with our prompt

So we might try something not super smart in our prompt such as "extract details for the revolver section of the tear sheet given the following information where the following information is the relevant sections from our contract text format. FOLLOWING RELEVANT SECTIONS INSERTED HERE". And then the model responds to us, hopefully sending back something sensible. If this seems to you to be a somewhat stochastic process, it indeed is. It's not like regular programming when you'll always get back the same result. In fact, if you were to do this prompt multiple times, you might get back different things. Which is okay! Different people may phrase the relevant extractions in different ways. 

However, we must make sure that the key concepts and facts are extracted. And we might find that our prompt is not optimal. So we tinker and tinker and try and make it optimal. How do we do this? We show the outputs of the model to our domain expert. We asked them to rate the response as good or bad, and to then write a critique as to why the response was good or bad. This takes a lot of cycles of our domain expert and we try and do it as little as possible. But based on these critiques, we can improve our prompt. So now you see we have made our model a little bit better at extracting the output we want. 

## We use a second Judge LLM

What we want to do now is to train a second language model to do the act of **critiquing** our first model's work. For this we need the original model's results, and domains critiques. We now ask this new AI model to produce its own critique. We show domain this critique. Domain tells us if this critique is aligned with their own critique.  We now iterate on the prompt of this second model such that these critiques get aligned. Now we've taken a huge burden of the main shoulders. They no longer have to critique your first model. We have another model doing it for us. 

So we use these critiques that the second model gives us to improve the first model and after improving the first model we can improve the second model again and this is an iterative process we repeat it three or four times until we get good enough performance. What do we mean by this? After all, we are offering our clients 100% SLAs. For us it means that our model is doing most of the extraction correct and the second judge model is doing most of the critiquing correct which is helping us improve the first model. As a result of this all we now need domain to do is to give a thumbs up or thumbs down. This is **much less work** than writing a critique and comparing the critique to the second model's critique. 

As part of the work of getting this second critic model to tell us how good our extract are, we'll be looking to see in which cases the extractions fail. And by doing this, we'll also end up improving our first extraction model. This is called **error analysis**. 

## Fine Tuning and Particularization

But it gets better. By extracting and using the data where domain gave a thumbs up to the output of the first model and the same for the judge model, we can train specific new models on this data, both extraction models and judge models, which are particularized to the specific task that we are trying to do.  This process is called model **fine tuning**. Now we don't have to worry about optimized prompts: all that information is directly baked into our model. Furthermore, we can **fine tune further specifically on a particular client's data**. And what we'll have now is a model which has been trained on all the public data and on a particular client's data. So it is **particularized** to that client. It will deal with the peculiarities and vagaries of that client's contracts. 

## Some Interesting directions

The release of new open source reasoning models such as the Deep Seek models from China can help us push some of the stuff in interesting directions. At the end of the day what we are trying to do is to capture the thinking and the logic of domain into our models. Reasoning models tell us how the model is thinking before coming to an answer. By taking the thinking of domain and putting it into the thinking process of the model, we might be able to improve the output of our models faster. Being able to see the thinking process of a judge model also helps domain to align with that model easier. A higher alignment would mean that the thinking of the model is good, and much like that of the domain expert.