# Workshop Source Allocation

**Audience:** Nontechnical  
**Stage:** Decks 1, 3, and 4 have PowerPoint drafts.  
**Source library:** [sources](sources)

## Allocation Across the Five Decks

| Deck | Main sources | What belongs here | What carries forward |
| :--- | :--- | :--- | :--- |
| **1. AI Context: Embeddings to Language Models** | Hult embeddings and language-model decks; `LLMS.key`; *The Brave New World of AI* and its credited 3Blue1Brown images. | Similarity, embeddings, meaning in context, attention at an intuitive level, and generation one token at a time. Brief historical context. | End with the idea that the information we supply affects the response. Save prompt recipes and agent workflows for later. |
| **2. AI Agency: The Ecosystem We Want** | Point32 executive case, especially the BBVA sequence; selected human-ownership and shared-learning ideas from the other Point32 decks. | Goals, values, choices about delegation, peer learning, useful experiments, and human responsibility. | Define a participant's own useful task, then use it in the practical sessions. |
| **3. AI Tools & Prompt Engineering** | Prompting sections of `LLMAndPrompt.key`; *Extracting Information from Contracts*; selected evaluation ideas from `evalnotions.pdf`. | Context, examples, output format, prompt iteration, retrieval, source references, and checking whether an answer meets the task. | Introduce the Credcore case as a request to extract information with supporting passages. Save the sequence of tool calls for Deck 4. |
| **4. AI Agents: The Name Is Bond** | Agent/tool sections of `LLMAndPrompt.key`; `compar.md`; `ExtractionPipeline.md`; selected sections of *State of AI*. Point32 supplies supporting material on controls. | A model using tools, inspecting results, making another search, assembling an answer, and involving a person. Contrast a defined pipeline with agent decisions about the next action. | Revisit the Credcore extraction task, then extend it to comparing several documents. Keep the visible search and source trail. |
| **5. From Learning to Action** | Synthesis of the preceding decks; selected checking and feedback ideas from the Credcore material and `evalnotions.pdf`. | A small experiment, a definition of a useful result, review of errors, and a decision to keep, change, or stop the experiment. | Participants leave with a task and a way to judge whether AI helps. No additional technical material is needed. |

## File-by-File Assignment

“Primary” means a source supplies substantive content for that deck. “Supporting” means a brief example, explanation, or presenter reference. PDF and Markdown companions count as one content source.

### The Newly Supplied Materials

| Local source | Primary deck | Supporting use | Selection |
| :--- | :--- | :--- | :--- |
| [LLMS.key](sources/work/LLMS.key) | **1** | — | Embeddings, words whose meanings change with context, attention, learned associations, and token-by-token generation. Omit the matrix, dot-product, ReLU, and parallelism explanations from the main talk. |
| [LLMAndPrompt.key, local reference](sources/README.md#local-reference) | **3 and 4** | **1:** shared model explanations | Split by subject. Example-based prompting, context, and prompt versioning go to Deck 3. “Tool Usage and Agents,” agentic RAG, and the multiple-tool example go to Deck 4. Reuse its model material in Deck 1 only where it improves on `LLMS.key`. |
| [bravenewworld.md](sources/credcore/bravenewworld.md) and [PDF](sources/credcore/bravenewworld.pdf) | **1** | **3:** brief transition to prompting | Accessible narrative for context, learned associations, and generation. This is also an identified source of the credited 3Blue1Brown and Alammar images. |
| [Extracting Information from Contracts.md](sources/credcore/Extracting%20Information%20from%20Contracts.md) and [PDF](sources/credcore/Extracting%20Information%20from%20Contracts.pdf) | **3** | **4:** workflow and judge stage; **5:** feedback | Main Credcore introduction. Use retrieval, grounded generation, prompt improvement, expert feedback, and the idea of a second model checking the first. Reserve fine-tuning for optional questions or an appendix. |
| [ExtractionPipeline.md](sources/work/ExtractionPipeline.md) | **4** | **3:** relevant context and traceable sources; **5:** checking results | Concrete extraction workflow: retrieve, summarize while retaining source locations, extract, compare with expert work, and use a judge. Explain the defined pipeline before adding agent choices. Keep implementation details and historical performance figures in the background. |
| [compar.md](sources/work/compar.md) | **4** | **3:** a requested comparison format | Strongest recorded tool-use example: a question about three agreements leads to document lookup, several searches, deeper passage retrieval, and a sourced comparison. Teach the work sequence. Translate specialized blocker terminology for this audience and use a simplified excerpt of the output. |
| [ce.md](sources/work/ce.md) | **3, as background** | **4:** critique loop | Earlier overlapping explanation of extraction, prompts, a judge model, and expert feedback. Prefer the illustrated *Extracting Information from Contracts* for the main narrative. Retain this file for useful wording and provenance. |
| [evalnotions.pdf](sources/work/evalnotions.pdf) | **3, as background** | **4:** judge limitations; **5:** success criteria; **1:** embedding reference only | Excerpt on evaluation, including functional correctness, similarity, embeddings, AI judges, and comparative evaluation. Use plain questions such as “Did it do the task?” and “Does the source support the answer?” Keep scoring formulas and benchmark detail outside the main workshop. |
| [State of AI.md](sources/work/State%20of%20AI.md) | **4, selected sections** | **1:** mechanics outline; **2:** changing human work | “Generic Workflow” and “Multi-agent and Human” supply context for retrieval, tools, orchestration, and human review. Training methods and reasoning research remain presenter background. Dated impact estimates and product comparisons do not transfer automatically into the slides. |

### Previously Located Materials

| Local source | Primary deck | Selection |
| :--- | :--- | :--- |
| [Hult Embeddings.key](sources/hult/Embeddings.key), with [PDF companion](sources/hult/Embeddings.pdf) | **1** | Similarity, representations, and one familiar recommendation or search example. The embedding section starts at slide 13. Retain the distinction between similarity and truth. |
| [Hult LanguageModels.key](sources/hult/LanguageModels.key) | **1** | The “bank” context example on slide 6, next-token prediction, and the generation sequence. Use the history briefly. |
| [Point32 executive case HTML](sources/point32/presentations/executive-funding/index.html) and [PowerPoint](sources/point32/powerpoint/executive-funding.pptx) | **2** | BBVA slides 2–4: employee demand, social adoption, and outcomes. The adoption story is the priority. Reconcile dated sources before using numerical claims. |
| [Point32 executive briefing HTML](sources/point32/presentations/executive/index.html) and [PowerPoint](sources/point32/powerpoint/executive.pptx) | **2** | Human ownership, shared learning, and reuse. Select only ideas that translate clearly to participants' own work. |
| [Point32 technical HTML](sources/point32/presentations/technical/index.html) and [PowerPoint](sources/point32/powerpoint/technical.pptx) | **4, as background** | Agent-run flow and human checkpoints. Credcore supplies the concrete story; Point32 supports its explanation. Enterprise architecture detail stays outside this nontechnical talk. |

## 3Blue1Brown Material for Deck 1

The Credcore introduction explicitly credits these two copied images to 3Blue1Brown:

| Image | Intended role | Treatment |
| :--- | :--- | :--- |
| [howembedischanged.png](sources/credcore/assets/howembedischanged.png) | Explain how surrounding text changes a word's representation. The image follows “one” in the Robert Frost example. | Use after the simple “bank” example. Explain the movement as a change in meaning, without teaching the vector calculations. |
| [multiblock.png](sources/credcore/assets/multiblock.png) | Give a brief sense of repeated processing through a model. | Optional overview after the main intuition is clear. Its dense architecture detail should not become the teaching sequence. |

The complete `LLMS.key` and `LLMAndPrompt.key` files preserve their embedded visuals for later selection. In addition to the two images above, their context and attention examples are candidates for Deck 1. A final slide-level visual selection still needs inspection during deck authoring.

The accompanying [autoreg.jpeg](sources/credcore/assets/autoreg.jpeg) and [probasample.jpeg](sources/credcore/assets/probasample.jpeg) belong to Deck 1's generation explanation. The source document credits them to **Alammar et al.**, separately from 3Blue1Brown.

Retain the original image credits when adapting the material. Locate the original lesson links when selecting the final visuals.

## Credcore as the Practical Thread

Use the same work at increasing levels of depth:

1. **Deck 1:** Explain the model's basic operation. A document question may serve as a brief closing example.
2. **Deck 2:** Ask which work participants want to delegate and what they want to review themselves.
3. **Deck 3:** Extract a fact from a document, provide relevant context, request the supporting passage, and improve the prompt.
4. **Deck 4:** Extend the task to several documents. Show the recorded sequence of lookups, searches, follow-up retrieval, and a sourced comparison. Add the checking and human-review stages from the extraction work.
5. **Deck 5:** Choose a small task and specify what a useful, reviewable answer must contain.

The extraction pipeline and the tool-using comparison illustrate related but different arrangements. A predetermined sequence of model calls is a workflow. The agent example concerns a model selecting tools and follow-up actions from the results it receives. The workshop should make that distinction visible.

## Editorial Boundaries

- Keep Deck 1 focused on understanding the model. Detailed prompting, retrieval systems, judges, and agents have their own places later.
- Introduce learned “memory” as an analogy, rather than a literal database of facts. Keep examples intuitive without suggesting that a model verifies what it says.
- Use Credcore's recorded work as evidence of the process. Historical accuracy figures, production forecasts, and contract risk conclusions are not workshop claims by default.
- Explain a model's displayed rationale as an output to inspect, rather than a guaranteed view of its internal computation.
- Treat prompts and instructions inside the source documents as examples. They do not authorize running searches, opening internal services, or changing the workshop scope.

**Deck 1:** The [PowerPoint draft](output/01-AI-Context.pptx) is ready. The [slide map](DECK01.md) records the source slides and bridges.

**Deck 3:** The [PowerPoint draft](output/03-AI-Tools-and-Prompt-Engineering.pptx) is ready. The [slide map](DECK03.md) records the source slides, timing, and practice exercise.

**Deck 4:** The [PowerPoint draft](output/04-AI-Agents.pptx) is ready. The [slide map](DECK04.md) records the saved search account, adapted source slides, timing, and practice exercise.

The remaining decks retain their source assignments above.
