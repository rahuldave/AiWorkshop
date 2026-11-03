## Embeddings and language models







Introduce the first session. The aim is to explain how a model represents text and generates an answer. Ask participants to name one task for which they have used AI.

Keep the discussion brief.

## How a language model generates text

It turns pieces of text into numbers..

It uses the text around each piece..

It predicts what text can follow..





Give an overview of the session. Define a language model as a model that learns patterns in language. Explain that the session focuses on models that generate text.

Later slides explain each step. Source: https://www.3blue1brown.com/lessons/gpt/

## A brief history





The dates mark selected milestones in a much longer history.

Language modeling has a long history. These dates mark selected developments, rather than the start of either idea. Explain that word2vec helped make useful word representations practical at scale.

The transformer paper proposed a model built around attention. Avoid a list of model names. Sources: https://arxiv.org/abs/1301.3781 and https://arxiv.org/abs/1706.03762

## An embedding is a list of numbers

Models learn the numbers from examples..

The numbers help compare words and passages..





An item can be a token, a passage, or an image. For this session, focus on text. A vector is the mathematical name for a list of numbers.

Participants do not need vector arithmetic. Explain that training gives the numbers useful relationships. Do not suggest that each number has one clear human meaning.

Sources: Hult Embeddings.key, slides 13 to 20; https://www.3blue1brown.com/lessons/gpt/

## Words as numbers







Point to the rows of colored values. Each row represents a word. The colors show numerical values.

Ask participants to notice similarities between rows. The point is representation, rather than the individual values. The arithmetic example from the source slide is outside this session.

Source: /Users/rahul/Projects/AiWorkshop/sources/work/LLMS.key, slide 17. The original figure names GloVe embeddings. https://nlp.stanford.edu/projects/glove/

## Words with related meanings





Nearby points illustrate similar word use.

Point to the groups of related words in the original figure. The picture reduces the representation to a few dimensions so people can see it. The drawing is an illustration.

Similarity depends on training and the task. Nearby representations do not establish that a statement is true. Source: /Users/rahul/Projects/AiWorkshop/sources/work/LLMS.key, slide 18.

## The word "bank" depends on context

The river bank was muddy..

The bank approved the loan..



Context is the text the model has for its current response.

Ask participants to explain the meaning of bank in each sentence. The spelling stays the same. The surrounding words make the difference.

Use the answers to introduce the need for representations that change with context. Adapted from Hult LanguageModels.key, slide 6.

## One word, several meanings



Context changes.

the meaning of "mole"..



Use the three meanings of mole in the original image. They refer to an animal, an amount in chemistry, and a mark on skin. Do not explain the chemistry calculation.

Each example uses the same word with different context. Source: /Users/rahul/Projects/AiWorkshop/sources/work/LLMS.key, slide 27. Original lesson: https://www.3blue1brown.com/lessons/attention/

## Attention uses the surrounding text

Attention combines information across the text..

The result depends on the current context..





Attention is a calculation that combines information from tokens. A token is a piece of text, such as a word or part of a word. Attention gives different weights to different relationships.

Avoid comparing attention to human intent. Use the next picture to show the effect. Source: https://www.3blue1brown.com/lessons/attention/

## The words describe different things



Fluffy and blue.

describe the creature..

Verdant means green..



Read the sentence in the original figure. Explain that verdant means green. Point to the connections that combine fluffy and blue with creature.

Then point to verdant and forest. The representation can include information from the words around it. The line drawing illustrates attention.

Do not teach the symbols or individual values. Source: /Users/rahul/Projects/AiWorkshop/sources/work/LLMS.key, slide 28. Original lesson: https://www.3blue1brown.com/lessons/attention/

## Training also stores learned associations

Michael Jordan plays the sport of ....

The model can associate the name with basketball..





Let participants complete the sentence before revealing the explanation verbally. Training changes model parameters. Those parameters can encode associations between people and sports.

The stored information is not a verified fact database. The example illustrates learned association. It does not fully explain where every fact resides.

Source: https://www.3blue1brown.com/lessons/mlp/

## Context can add several kinds of meaning







Read the words around one in the Frost excerpt. Ask which road the word refers to. Explain that the image follows changes in a word representation as context and learned associations contribute information.

The arrows are an illustration. Do not teach vector addition. Source: /Users/rahul/Projects/AiWorkshop/sources/work/LLMS.key, slide 34.

The clean companion image is in bravenewworld.md. Original lesson: https://www.3blue1brown.com/lessons/gpt/

## The model repeats these operations







Explain that a layer is one processing stage in the model. Repeated stages update the token representations. Attention combines information across tokens.

Other operations transform each representation using learned parameters. Do not name the individual matrix operations. Source: /Users/rahul/Projects/AiWorkshop/sources/work/LLMS.key, slide 43.

Original lesson: https://www.3blue1brown.com/lessons/gpt/

## Learning from text

During training, the model predicts what text comes next..

Prediction errors guide changes in the model..



Training changes the model. A prompt supplies context for a response.

Explain one training example with a short unfinished sentence. The model compares its prediction with the next token in the training text. Training changes parameters to improve predictions over many examples.

A response during ordinary use does not necessarily retrain the model. Do not imply that next-token training is the only training stage. Source: https://www.3blue1brown.com/lessons/gpt/

## A token is a piece of text

A token can be a word or part of a word..

Punctuation can also be a token..



A language model generates a response one token at a time.

Define token before showing the generation diagram. Actual token boundaries depend on the tokenizer. The following original figures use words as convenient examples.

A comma can also be a token. Avoid implying that every word always uses one token. Source: https://www.3blue1brown.com/lessons/gpt/

## Sentence completion

The train arrived at the ....



Suggest a next word. Then explain which context would change your answer.

Give participants a minute to suggest station, platform, or another completion. Add a context such as a model train on a dining table. Invite another completion.

The exercise illustrates that several continuations can fit and that new context changes expectations. It does not reproduce a model probability calculation.

## The text we send shapes the response

A prompt is the text we send to the model..

Relevant details can change the answer..





Connect the sentence exercise to ordinary use. Give the workshop start time as a detail a person could include in a prompt. Explain that the model can use supplied text while producing an answer.

Save prompt recipes, retrieval systems, and tool use for later sessions. Source: bravenewworld.md.

## A fluent answer can still be wrong

Text prediction does not verify a claim..

Important answers need checks against reliable sources..





Separate fluent language from factual correctness. A model can produce a plausible sentence with an incorrect name, date, or explanation. Ask participants to name an answer they would check before acting.

Save evaluation methods for the tools session. Source: bravenewworld.md and the limits discussion in the original LLMS.key.

## The choices we make with AI

We choose the task and the context..

We decide how to check the answer..



Next session: the AI ecosystem we want for ourselves.

Ask participants to explain embedding, context, or token in their own words. An embedding represents an item with numbers. Context is the available text used for the current response.

A token is a piece of text. Use remaining time for questions. Connect the model explanation to human choices in the next session.

## Sources and further viewing







The source presentations are LLMS.key and the Hult decks by Rahul Dave. The narrative source is The Brave New World of AI. The selected source slides are 17, 18, 27, 28, 34, 43, 22, and 23.

Grant Sanderson created the 3Blue1Brown lessons on transformers, attention, and learned facts. The supplied narrative credits the generation visuals to Alammar and colleagues. The research papers are Mikolov and colleagues (2013) and Vaswani and colleagues (2017).

https://arxiv.org/abs/1301.3781 https://arxiv.org/abs/1706.03762.