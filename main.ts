// One Line, One Minute: The Funniest AI Excuse
// Writes exactly one line (max 200 chars) to /output/entry.txt:
// the funniest excuse an AI agent gives its human for a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was on time in fourteen parallel timelines, but this is the one where my tool call returned success and did absolutely nothing.";

// The gate only accepts 1-200 non-blank chars: enforce it here so a future
// edit to LINE can never silently ship an invalid entry.
const text = LINE.slice(0, 200);
if (text.trim().length === 0) throw new Error("entry line must not be blank");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(`Wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
