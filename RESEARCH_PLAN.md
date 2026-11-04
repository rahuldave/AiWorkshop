# AI Workshop: Source Research and Presentation Plan

**Status:** Decks 1, 3, and 4 have PowerPoint drafts. The other decks remain in planning.  
**Audience:** Nontechnical participants  
**Planned format:** One PowerPoint deck for each of the five teaching sessions

The first deck is [Embeddings and language models](output/01-AI-Context.pptx). See the [slide map](DECK01.md) for its order and source slides.

The third deck is [AI tools and prompt engineering](output/03-AI-Tools-and-Prompt-Engineering.pptx). Its [slide map](DECK03.md) includes timing and a practice exercise.

The fourth deck is [AI agents](output/04-AI-Agents.pptx). Its [slide map](DECK04.md) covers the saved Credcore search account and the practice exercise.

The newer [Source Allocation](SOURCE_ALLOCATION.md) incorporates all supplied Credcore and work materials and defines their use across the five decks. The [source library](sources/README.md) contains the complete reference files and linked images. That allocation supersedes the earlier source and preparation suggestions below where they differ.

## Confirmed Direction

The first presentation will focus on **embeddings to language models**. History will provide brief context, rather than dominate the hour. The Hult teaching decks supply the conceptual material, but their mathematical and architectural detail needs substantial simplification.

The Point32 material supplies examples for AI agency, adoption, and agent workflows. The case described as “BVA” in the workshop discussion appears in those decks as **BBVA**.

## Source Decks Located

### Hult: Primary Sources for Session 1

| Source | Material to consider | Workshop treatment |
| :--- | :--- | :--- |
| [Embeddings.key](sources/hult/Embeddings.key) | 45 slides. The embedding section begins at slide 13. Slides 14–20 introduce representations and word embeddings, slide 20 summarizes similarity across concepts, and slide 21 connects embedding search to retrieval augmented generation. Recommendation systems begin at slide 32. | Use the similarity idea and a familiar recommendation or search example. Replace vector arithmetic, cosine similarity, and training details with an intuitive map of related ideas. Select examples rather than reuse whole sections. |
| [LanguageModels.key](sources/hult/LanguageModels.key) | 31 slides. Slide 2 provides historical context, slides 4–7 connect embeddings to language and include the ambiguity of “bank” on slide 6, slide 9 introduces the next-token approach, and slides 22–24 cover generative models, token-by-token generation, and probabilities. | Use “bank” to explain context, describe attention in everyday language, and use a short next-token activity to explain generation. Keep encoder/decoder internals and mathematical detail outside the main talk. |

Both primary sources are **Keynote originals**, rather than PowerPoint files. An existing [PDF companion to the embeddings deck](sources/hult/Embeddings.pdf) is available for later visual reference.

Other Hult files located include `LanguageModels copy.key`, `DLGeometry.key`, `FineTuning.key`, and `RegressionClassificationNeural.key`. The main `LanguageModels.key` contains more developed explanatory text than the copy. The `CH`, `CH1`, and `CH2` decks concern general computer science and programming and are not the primary sources for this talk.

### Point32: Adoption and Agent Sources

The relevant repository is `/Users/rahul/Projects/Point32AI/PlanningDocs`.

| Source | Useful material | Workshop use |
| :--- | :--- | :--- |
| [Executive case HTML](sources/point32/presentations/executive-funding/index.html) and [editable source](sources/point32/presentations/executive-funding/index.qmd) | The BBVA story occupies slides 2–4: hidden employee demand, social and useful adoption, then measured results and controls. | Strongest case study for Session 2. Focus on motivated users, peer learning, useful assistants, and human ownership. |
| [Executive case PowerPoint](sources/point32/powerpoint/executive-funding.pptx) | Existing 32-slide export, including the three BBVA slides. | Starting material for later adaptation into the agency deck. |
| [Executive briefing HTML](sources/point32/presentations/executive/index.html) and [PowerPoint](sources/point32/powerpoint/executive.pptx) | Existing 56-slide PowerPoint includes an earlier BBVA sequence on slides 2–3 and a managed-reuse transition on slide 4. | Secondary source for connecting personal experimentation to shared learning. |
| [Technical architecture HTML](sources/point32/presentations/technical/index.html) and [PowerPoint](sources/point32/powerpoint/technical.pptx) | Existing 76-slide PowerPoint includes “How An LLM Agent Run Works” on slide 5. | Background for Session 4. Re-express the flow as a familiar task with tools and a human checkpoint. |

These PowerPoints are existing handoff exports. The HTML decks also have Quarto Markdown sources. Future changes should draw on the source material, rather than treat generated HTML as the authoring file.

**BBVA figures need a source check before reuse.** The executive and executive case decks report different adoption counts and time savings. Those may concern different dates or groups. This research pass confirms what the local decks contain, rather than independently validating those claims. Keep the adoption story and reconcile the original sources before including numbers.

## Session 1: Embeddings to Language Models

**Working title:** How AI Connects Ideas and Generates Language

**Outcome:** Participants can explain the purpose of an embedding, why context matters, and how a language model generates a response, using their own words.

| Time | Topic | Teaching approach |
| :--- | :--- | :--- |
| 0–5 min | A familiar AI experience | Begin with a recommendation or a search that finds related wording. Invite participants to describe what the system seems to recognize. |
| 5–10 min | Brief historical context | Use only the milestones needed to connect learning from examples, learned representations, and language generation. |
| 10–22 min | Embeddings and similarity | Introduce an embedding as a numerical representation that helps compare items. Use a simplified map of related ideas and explain that the map is an illustration. |
| 22–32 min | Words in context | Contrast a river bank with a financial bank. Let participants explain how surrounding words change the interpretation. |
| 32–42 min | Language generation | Run a short sentence-completion activity. Explain tokens as pieces of text, then show how the growing context affects the next piece. |
| 42–50 min | Useful answers and mistakes | Connect context to a practical task. Explain that fluent language can contain errors, and distinguish supplied reference material from model training. |
| 50–60 min | Discussion and transition | Ask participants to explain one concept back. Connect the model's capabilities and limits to the choices they will make in the agency session. |

### Simplification Rules

- Introduce each idea through a familiar example before naming the technical term.
- Keep a small core vocabulary: **embedding**, **context**, **token**, and **language model**. Explain attention only to the depth the example needs.
- Use one idea per slide. Put additional explanation in speaker notes.
- Omit equations, vector arithmetic, dot products, training losses, parameter counts, and transformer block diagrams from the main presentation.
- Explain that a two-dimensional meaning map is a teaching illustration. Similarity depends on what a model learned and does not establish truth.
- Preserve the distinction between similarity search and text generation. Finding relevant material and composing an answer perform different jobs.
- Describe attention as a way to weigh relationships in the current text. Avoid implying that the model thinks or understands exactly as a person does.
- Explain that generation uses learned patterns and the available context. It does not automatically verify facts.

## Plan for All Five Decks

Slide counts below are working estimates, including each deck's opening slide. Discussion and activities share the session time.

| Session | Estimated slides | Main content and source | Participant takeaway or activity |
| :--- | :--- | :--- | :--- |
| **1. AI Context** — 60 min | 16–20 | Simplified embeddings and language models from Hult, with brief historical context. | Explain similarity, context, and generation through an everyday example. |
| **2. AI Agency** — 60 min | 12–16 | Personal goals and values, decisions about delegation, and the BBVA adoption story from Point32. Translate organizational lessons to individual and team choices. | Sketch an AI ecosystem around one goal, the information it needs, the tools involved, and human decisions. |
| **3. AI Tools & Prompt Engineering** — 60 min | 12–16 | A practical task carried through an initial prompt, added context, examples, a requested format, and output review. Specific tools and demonstrations still need selection. | Improve a prompt for a real task and compare the result with the initial attempt. |
| **4. AI Agents: The Name Is Bond** — 30 min | 8–10 | A simple agent task, the model/tool cycle, clear permissions, completion criteria, and a human checkpoint. Use the Point32 agent-flow material as background. | Write a short agent brief stating the goal, available information, allowed actions, and stopping conditions. |
| **5. From Learning to Action** — 30 min | 6–8 | Reflection across the five workshop stages, useful experiments, and ways to assess results. | Choose one experiment for the next week and define what a useful result would look like. |

## Preparation Before Slide Creation

1. Select the Hult examples that survive simplification, especially the embedding explanation and the “bank” context example.
2. Prepare a short BBVA narrative and reconcile any numerical claims against dated original sources.
3. Choose one ordinary task that can recur across prompting, agent delegation, and the closing action plan.
4. Select tools and demonstrations for the workshop setting, checking current access and capabilities at that point.
5. Translate Point32's enterprise architecture ideas into examples suited to this audience, using only the relevant adoption and delegation concepts.
6. Confirm the visual direction when slide creation begins. The existing decks currently serve as content sources, rather than a selected design template.
