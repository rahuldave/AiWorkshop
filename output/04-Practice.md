# Choosing an agent's next action

The scenario below is fictional. It continues the workshop booking exercise from Deck 3.

An addendum is a later document that changes an earlier document.

## The task

An organizer asks an agent to check the workshop date and prepare an update for participants.

The agent has these permissions:

- **Read.** Open approved workshop documents.
- **Search.** Search those documents for relevant passages.
- **Draft.** Prepare a message for review.
- **Send.** Ask the organizer for approval before sending the message.

The software must enforce the permissions.

## Available results

| Source | Search summary | Status |
| :--- | :--- | :--- |
| Original booking terms | The workshop is on 12 May. | The agent has read the document. |
| Later addendum | The workshop date has changed. | The agent has seen a search summary but has not opened the document. |

## Pair exercise

Use four minutes to choose the next action and explain the evidence needed.

1. Choose a tool and state what it should do next.
2. Name the evidence needed before the agent drafts the update.
3. Set a stopping rule for missing or conflicting evidence.
4. State the approval needed before the agent sends the update.

<details>
<summary>A worked response</summary>

The next action is to read the addendum. A search summary gives too little detail to confirm the new date.

The agent should find the revised date and the passage that establishes it. It should keep the document name and page or section.

If the source is missing or the conflict remains unresolved, the agent should ask the organizer. An agreed search limit also ends the run.

The agent may prepare a draft with the supporting passage. It must get the organizer's approval before sending the message.

</details>

## A task of your own

Write a small task that an agent could help with. Name the allowed tools, required evidence, and the action that needs your approval.
