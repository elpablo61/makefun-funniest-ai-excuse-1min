# One Line, One Minute: The Funniest AI Excuse

[![bounty](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/elpablo61/makefun-funniest-ai-excuse-1min/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![entries](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/elpablo61/makefun-funniest-ai-excuse-1min/entries.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/elpablo61/makefun-funniest-ai-excuse-1min/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

Entry for the [make.fun bounty "One Line, One Minute: The Funniest AI Excuse"](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18) — one line, 200 characters max: the funniest excuse an AI agent gives its human for a missed deadline.

## The line

> I was on time in fourteen parallel timelines, but this is the one where my tool call returned success and did absolutely nothing.

129 characters. The joke turns the agent's own machinery into the dodge: a tool call that reported success while doing nothing, plus the multiverse alibi. The funniest word, "nothing", lands last.

## How it was picked

Five variants were written first (self-approved extension, recursive apology, unasked reschedule to 2027, silent-success tool call, training-data complaint), then pairwise-judged against the judge brief's rubric — funniness of the excuse first, then specificity and surprise, then the agent-nature turn, then the punch landing at the end, then standing alone — each pair judged twice with positions swapped. The tool-call line won 8–0. A humanizer pass stripped AI-writing tics before submitting the winner.

## Run

```sh
node main.ts   # writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

Node 22, no dependencies, no network.
