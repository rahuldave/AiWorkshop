# AI agents

The [PowerPoint draft](output/04-AI-Agents.pptx) has 16 slides for a 30 minute session. Speaker notes include timing, explanations, and sources.

The [practice handout](output/04-Practice.md) supports a four minute exercise on choosing an agent's next action.

## Session focus

An agent uses a model and tools during a task. Tool results can guide the next action.

The session follows the [saved Credcore comparison](sources/work/compar.md). The source reports six turns, including document lookup, summary searches, and searches for original passages.

The source records an account of the run rather than the complete tool inputs and outputs. The deck keeps that distinction visible.

The session also distinguishes a defined workflow from agent choices. The [extraction notes](sources/work/ExtractionPipeline.md) supply the workflow and review stages.

The [Point32 source](sources/point32/presentations/technical/index.qmd) supplies examples of permissions and human review. The workshop uses a short document policy instead of the full architecture.

## Slide order

| Slide | Topic | Minutes | Source |
| :--- | :--- | :--- | :--- |
| 1 | AI agents The name is Bond | 1 | New slide |
| 2 | An agent's next action | 2 | New slide |
| 3 | A tool returns a result | 2 | LLMAndPrompt.key, slide 49 |
| 4 | Results become the next input | 2 | LLMAndPrompt.key, slide 51 |
| 5 | Fixed steps and agent choices | 2 | New slide |
| 6 | The Credcore comparison task | 2 | New slide |
| 7 | The recorded search sequence | 3 | New slide |
| 8 | Follow-up searches for evidence | 2 | New slide |
| 9 | An answer needs source locations | 2 | New slide |
| 10 | A detail can remain unresolved | 1 | LLMAndPrompt.key, slide 53 |
| 11 | Review in the extraction workflow | 2 | New slide |
| 12 | Permissions for a document agent | 2 | New slide |
| 13 | Stopping conditions | 1 | New slide |
| 14 | The next action | 4 | New slide |
| 15 | A task with clear limits | 2 | New slide |
| 16 | Sources and further reading | 0 | New slide |

## Source use

The deck adapts three slides from the [local reference presentation](sources/README.md#local-reference), `LLMAndPrompt.key`.

The selected figures show calculator use, the return of tool results to the model, and an unresolved detail in a saved comparison.

The screenshot of an unresolved detail concerns a separate Credcore example. It does not show the same agreements as the six-turn account.

The deck uses the recorded source locations to explain a review process. It does not adopt the saved contract risk ratings as verified conclusions.

The full contracts were not rechecked. Historical performance estimates and forecasts remain outside the teaching slides.

## Practice

The practice scenario continues the fictional workshop booking example from Deck 3. Participants choose a next action after a search reports a changed date.

They name the source needed, a stopping rule, and the approval required before sending an update.

## Further reading

- [Building effective agents, Anthropic](https://www.anthropic.com/engineering/building-effective-agents)
- [Hands-On Large Language Models, Jay Alammar and Maarten Grootendorst](https://www.llm-book.com/)
