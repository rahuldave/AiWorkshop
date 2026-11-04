## AI tools and prompt engineering

Introduce the practical session. Prompt engineering means writing and testing requests to an AI model. Participants will extract facts from a short document.

They will check the answers and revise a prompt. Use an approved chat assistant for the exercise. The practice text is fictional.

## Writing and document questions

Turn rough notes into a draft.

Extract facts with supporting passages.

Invite participants to recall a task from the agency session. A short writing task can show how audience and format affect a response. Document extraction gives the group a task with answers they can check.

Source: sources/work/LLMAndPrompt.key, slides 33 to 38; sources/credcore/Extracting Information from Contracts.md.

## Tools for different kinds of work

ChatGPT and Gemini are examples. Features depend on the account and workspace.

Show the input and response areas of the approved assistant. Point out file input and search if those features are available. File input supplies material for a response.

Web search finds current sources. Open an original source before relying on its summary. Use the fictional practice text for the demonstration.

Reference date. 3 November 2026. Sources: https://learn.chatgpt.com/docs/prompting; https://learn.chatgpt.com/docs/web-search; https://support.google.com/gemini/answer/14903178?hl=en.

## A prompt is a request

Describe the task and the result you need.

Turn these notes into a brief update for our team.

A short prompt can be enough for a simple task.

Connect the word prompt to a familiar request. The request states the work and the audience. More detail helps when it changes the result.

A rigid formula is unnecessary for every task. Source: https://learn.chatgpt.com/docs/prompting.

## The parts of a useful prompt

Task. The work the model should do

Context. The information it can use

Output. The form the answer should take

Checks. The conditions the answer must meet

Define context as the information available for the current response. Define output as the response or file the model returns. Use the same terms throughout the session.

For a document task, a check can require a quote for each answer. Source: sources/work/LLMAndPrompt.key, slides 34 and 35; sources/credcore/Extracting Information from Contracts.md.

## Instructions and output format

Use the original movie review example. Both prompts ask the model to label the review as positive or negative. The prompt on the right also shows the form of the answer.

LLM means large language model. Point to the instruction, the review text, and the answer. Source: sources/work/LLMAndPrompt.key, slide 34.

Figure reference: https://www.llm-book.com/.

## A prompt with useful details

Task. Rewrite these notes for the project team.

Context. The launch moved to 12 May. Priya owns the draft.

Output. Write three short bullets.

Checks. Keep the date and owner unchanged.

Illustrative example

Read the request as one prompt. The names and date belong to a fictional example. Explain that the audience affects wording and the output instruction affects format.

The check protects details that the writer must preserve. Invite one participant to name a useful detail for their own task. Source: sources/work/LLMAndPrompt.key, slides 34 and 35.

## Examples show the pattern

Examples pair a review with a label.

The final review has no label.

Explain the familiar food reviews. An example pairs an input with the kind of answer we want. Ask participants to label the final review.

Discuss how an example can also show a preferred writing style. In a prompt, label examples separately from the new input. Source: sources/work/LLMAndPrompt.key, slide 36.

Guidance: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices. Figure reference: https://www.llm-book.com/.

## An example for missing information

Examples can show how to handle a missing fact.

The two sentences are fictional examples. The second sentence does not contain a course date. An example can demonstrate when the response should say that information is missing.

Examples may guide the result, but they do not guarantee correctness. Source: sources/work/LLMAndPrompt.key, slide 36; sources/credcore/Extracting Information from Contracts.md.

## Earlier messages can affect the answer

Conversation history supplies context for later replies.

Explain how the earlier name appears in the later reply on the right. The figure illustrates conversation history. It does not describe every product memory feature.

Earlier messages can also carry an outdated assumption into a new task. Restate the details for the current task when needed. Source: sources/work/LLMAndPrompt.key, slide 43.

Figure reference: https://www.llm-book.com/.

## Credcore's document task

Extract a requested fact from a contract.

Keep the passage that supports the answer.

A person checks the result against the document.

Introduce the case from the supplied Credcore work. A contract can contain many definitions and related sections. The task starts with a specific fact and the passages needed to interpret it.

Keep the connection to evidence visible. The workshop exercise uses a shorter fictional document. Source: sources/credcore/Extracting Information from Contracts.md.

## Relevant passages become context

Retrieval finds relevant passages.

The model uses them to write an answer.

Retrieval augmented generation is often called RAG.

Follow the original diagram from the question to the document search and then to the response. Retrieval means finding relevant source material. RAG combines retrieval with generation from that material.

Related definitions and exceptions may also be needed. Retrieval can miss a passage, so the answer still needs a check. Source: sources/credcore/Extracting Information from Contracts.md and its credited ragidea.png.

## Practice document

Fictional text for the workshop exercise

Give participants the practice text from the companion handout. The labels Page 1 and Page 2 belong to the fictional text. Both fees are per participant.

The payment period begins on receipt of the invoice. The document does not state a minimum group size. Let participants read the passage before continuing.

## A broad summary request

The draft is an illustrative answer, not a recorded model response. Ask the group to identify what the draft leaves out. It omits the partner fee and the event that starts the payment period.

A broad summary request leaves the desired fields unclear. The next slide makes the request specific.

## A document extraction prompt

Extract the standard fee, partner fee, payment deadline, and minimum group size.

Use only the supplied document.

Return a table with the field, answer, quote, and page.

If the document gives no answer, write "Not stated".

Keep the two fees separate.

Read the prompt and point out the task, source boundary, format, and check for missing information. The requested quote and page make the answer easier to inspect. A requested citation can still be wrong.

The person must compare each quote with the document. Source: sources/credcore/Extracting Information from Contracts.md; sources/work/LLMAndPrompt.key, slides 34 to 38.

## Practice in pairs

Copy the practice text into your approved chat assistant.

Run a prompt of your own.

Check every answer against the document.

Change one instruction and run it again.

Eight minutes. Keep both prompts and both answers.

Use two minutes to copy the text and write a first prompt. Use three minutes to run it and compare the answer with the document. Use three minutes to revise one instruction and run it again.

Participants can work in pairs with one device. If an account is unavailable, compare prompts on paper. Keep the answer table hidden until the exercise ends.

## An answer with supporting passages

Worked answer for the fictional practice document

Reveal the worked answer after the exercise. The table is an answer key for the fictional document, not a claim about a real agreement. Ask participants to compare each field with their own result.

No passage supports a minimum group size. The payment answer must retain the event that starts the period.

## Checking an answer

Task. Every requested field appears.

Evidence. Each quote supports its answer.

Exceptions. The two fees stay separate.

Missing facts. Unstated details stay "Not stated".

Apply the checks to an answer from the exercise. Use the checks to describe an error precisely. A fluent answer may still omit a condition or invent a missing detail.

Ask each pair to report one correction. Source: sources/credcore/Extracting Information from Contracts.md; sources/work/evalnotions.pdf, printed pages 138 to 142.

## A revision for a missing condition

Observed error. The answer says "20 days".

Missing detail. The period starts when the invoice arrives.

Prompt revision. State when each payment period begins.

Test the revision on the same document. Compare the answers.

Use the payment deadline as an illustrative error. The original text says within 20 calendar days of receipt. Change one instruction so the effect is easier to inspect.

A change that helps one document may fail on another. Try other documents before keeping the prompt for repeated work. Source: sources/credcore/Extracting Information from Contracts.md; sources/work/LLMAndPrompt.key, slide 38.

## Prompt versions and results

The record connects each result to the prompt that produced it.

Show the prompt version column and the separate result rows in the original screenshot. The screen records two prompt versions on the same input. The screenshot alone does not establish which version works better.

Explain that participants can start with a document that records the prompt, answer, and review. Source: sources/work/LLMAndPrompt.key, slide 38.

## AI can help check an answer

Compare the answer with the document.

For each field, report supported, unsupported, or missing.

Quote the passage behind each judgment.

Give the checker the document and the answer.

An AI judge is a model that checks another model's answer. The instructions define what the checker should examine. A request for a score alone leaves the meaning of the score unclear.

The checker also needs the source material. Source: sources/credcore/Extracting Information from Contracts.md; sources/work/evalnotions.pdf, printed pages 138 to 142.

## An AI judge

People compare the judge's feedback with their own reviews.

Follow the diagram from the answer and the criteria to the score. The diagram names GPT-4 as its historical example. The workshop does not recommend that model for a new system.

In the Credcore case, experts compare their reviews with the judge's feedback and revise its instructions. Agreement on a few examples does not establish correctness on every document. Source: sources/credcore/Extracting Information from Contracts.md; sources/work/evalnotions.pdf, printed pages 140 to 142.

## Limits of an AI judge

A second model can repeat the first model's mistake.

Important answers need review against the original source.

A check must test the answer against clear criteria.

Keep the limit concrete. A checker can overlook the same exception as the first model or assign a score without sufficient evidence. Compare its judgments with reviews from people who know the task.

Use those disagreements to improve the check. Source: sources/work/evalnotions.pdf, printed pages 141 to 145; sources/credcore/Extracting Information from Contracts.md.

## A prompt for your own task

Task. Describe one result you need.

Context. Supply the information needed for that result.

Output. Choose a form you can use.

Checks. State how you will judge the answer.

An example can show the pattern you want.

Give participants a minute to adapt the prompt to a task from their own work. Invite one person to read the task and its check. Keep the task small enough to review.

Save the prompt with a result that passed the check. Source: sources/work/LLMAndPrompt.key, slides 34 to 38; sources/credcore/Extracting Information from Contracts.md.

## Next session: AI agents

An agent can use tools during a task.

We will follow a search across several documents.

The task and the checks still come from us.

Connect the session to the Credcore comparison example reserved for Deck 4. The next session will show document lookup, searches, and follow-up retrieval. End with a brief invitation for questions about the exercise.

Sources: sources/work/compar.md; sources/work/LLMAndPrompt.key, slides 49 to 53.

## Sources and further reading

Primary teaching source: Rahul Dave, LLMAndPrompt.key, slides 34, 36, 38, and 43. Case source: Rahul Dave, Extracting Information from Contracts. Prompt and conversation figures appear in the original teaching deck.

Book reference. Jay Alammar and Maarten Grootendorst wrote Hands-On Large Language Models. https://www.llm-book.com/.

The supplied Credcore notes credit the retrieval and judge figures to Chip Huyen, AI Engineering. Evaluation background: the supplied evalnotions.pdf excerpt, chapter 3, printed pages 138 to 145. Reference date.

3 November 2026. Tool and prompting sources. https://learn.chatgpt.com/docs/prompting; https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices; https://learn.chatgpt.com/docs/web-search; https://support.google.com/gemini/answer/14903178?hl=en.

All practice text and worked answers are fictional teaching examples.