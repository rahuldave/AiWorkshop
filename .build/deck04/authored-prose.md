## AI agents The name is Bond

Introduce the session on agents. The task from the previous session now extends across several documents. Participants will follow a saved Credcore search sequence and choose a next action in a short exercise.

The title comes from the workshop agenda.

## An agent's next action

An agent uses a model and tools to do a task.

Tool results can guide its next action.

A tool can search a document, calculate a result, or change a file.

An agent is a system that uses a model to select actions during a task. A tool is software the system can call. A tool result supplies new information.

The system can then take another action or return an answer. Sources: sources/work/LLMAndPrompt.key, slides 49 to 51; https://www.anthropic.com/engineering/building-effective-agents.

## A tool returns a result

A calculator returns a number that the model can use.

Follow the calculator example in the original figure. The calculator evaluates 47 divided by 12, multiplied by 3.14. The displayed result rounds to 12.2983.

A model can still choose the wrong expression or misread a result. The figure illustrates tool use, rather than a guarantee of correctness. Source: sources/work/LLMAndPrompt.key, slide 49.

Figure reference: https://www.llm-book.com/.

## Results become the next input

The tool result joins the context.

The model can request another action.

Follow the loop from the model to the tool and back to the prompt. Context means the information available for the current response. LLM means large language model.

The cloud represents connected software services. The system runs the tool and returns its result to the model. Source: sources/work/LLMAndPrompt.key, slide 51.

## Fixed steps and agent choices

A workflow can include an agent.

A defined workflow sets the order of the work in advance. An agent can select a next action using the results available. People still define its task and available tools.

The Credcore extraction notes describe a workflow. The comparison example reports tool use and follow-up searches. Sources: sources/work/ExtractionPipeline.md; https://www.anthropic.com/engineering/building-effective-agents.

## The Credcore comparison task

Compare protections across three agreements. Return a table with supporting passages.

Simplified request from a saved run. The original contracts were not rechecked.

The saved request names the Aurora, Evergreen, and Flexera agreements. It asks about three kinds of contract protection and an overall risk assessment. Focus on the search process and the supporting passages.

The workshop does not adopt the saved risk ratings as verified conclusions. The full agreements are outside this source library. Source: sources/work/compar.md.

## The recorded search sequence

Steps summarized from the saved run account

Read the sequence without teaching the index names. A summary is a shorter account of document content. The source calls the six numbered steps turns.

Step 1 looks up document identifiers. Steps 2 to 4 search the summaries for each agreement. Steps 5 and 6 search paragraph text for more detail.

The saved account reports these actions, but it does not contain the complete tool inputs and outputs. Source: sources/work/compar.md, the six numbered entries under Answer.

## Follow-up searches for evidence

Initial search. Find a summary of the requested protection.

Follow-up. Find original passages and related definitions.

The saved account reports deeper searches in steps 5 and 6.

Explain why the first result may leave a detail unresolved. The account then reports searches for original passages. Its search phrases include material intellectual property and release of guarantor.

Participants do not need to learn those legal terms. The lesson concerns a follow-up search for evidence. Source: sources/work/compar.md, turns 5 and 6.

## An answer needs source locations

Source locations listed in the saved answer

Point to one source location for each document. The saved answer also records paragraph numbers and links to source regions. A reviewer can use those locations to inspect the original text when access is available.

A citation still needs a check against its source. The original contracts were not rechecked for this workshop. Source: sources/work/compar.md, references 1, 5, and 8.

## A detail can remain unresolved

The answer leaves a missing amount unresolved.

A separate saved Credcore example

The screenshot belongs to a separate comparison of CoreWeave and HLLY material. Point to the unresolved amount in the HLLY column. The example shows how a saved answer can state a limit.

It does not verify the other conclusions in the original comparison. Source: sources/work/LLMAndPrompt.key, slide 53.

## Review in the extraction workflow

Extract. The model returns an answer with source locations.

Check. A second model compares it with the source text.

Review. A person checks errors and unresolved points.

Stages described in the Credcore extraction notes

Connect the agent example to the extraction workflow from Deck 3. The notes describe retrieval, summaries that retain source locations, extraction, and review. They also describe a second model checking the answer against original text.

A judge model can make mistakes. Keep human review for errors and unresolved points. Source: sources/work/ExtractionPipeline.md; sources/credcore/Extracting Information from Contracts.md.

## Permissions for a document agent

Example limits. The software must enforce them.

The table gives an example permission policy for a document assistant. Reading a document and changing it are different permissions. A prompt can describe the limits.

The application must also control which actions can run. Point32 materials describe allowed actions, approval gates, and restricted write access. Source: sources/point32/presentations/technical/index.qmd, Synthetic Benefits profile examples.

## Stopping conditions

Pause when a required source is missing.

Stop after the agreed search limit.

Ask a person when sources conflict.

Define the limits before a run starts.

An agent needs a stopping rule as well as a goal. Missing or conflicting evidence can require human review. A step limit prevents an open-ended run.

Sources: sources/point32/presentations/technical/index.qmd, human review triggers; https://www.anthropic.com/engineering/building-effective-agents.

## The next action

Context. The booking summary lists 12 May.

New result. A later document reports a changed date.

Decision. Choose the next action and a stopping rule.

Four minutes in pairs. The agent may read and draft. Sending needs approval.

The scenario is fictional and continues the workshop booking exercise from Deck 3. An addendum is a later document that changes an earlier document. The agent has seen a search summary but has not opened the addendum.

Give pairs two minutes to choose an action. Use two minutes to discuss the evidence and the approval needed before sending an update. A useful next action is to read the addendum and verify the relevant passage.

## A task with clear limits

Task. Compare the approved documents.

Tools. Read and search those documents.

Evidence. Keep passages and source locations.

Review. Return a draft for a person to check.

Next session. Choose an experiment for your own work.

Invite participants to name one task an agent could help with. Ask for the tools it needs and the action that should require approval. The task should have a result a person can inspect.

Connect those choices to the final session on a small experiment. Sources: sources/work/State of AI.md, Generic Workflow and Multi-agent and Human; sources/point32/presentations/technical/index.qmd.

## Sources and further reading

Teaching figures: Rahul Dave, LLMAndPrompt.key, slides 49, 51, and 53. The calculator figure is from the illustrated language model reference by Jay Alammar and Maarten Grootendorst. https://www.llm-book.com/.

Recorded search account. sources/work/compar.md. Extraction workflow: sources/work/ExtractionPipeline.md.

Permissions and review. sources/point32/presentations/technical/index.qmd. Agent definitions.

https://www.anthropic.com/engineering/building-effective-agents. The document exercise is fictional. The saved comparison is an account of a run, rather than a complete tool trace.

Original contract conclusions were not independently checked.