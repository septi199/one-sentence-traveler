import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 180 chars (gate max 200), that explains the modern internet
// to a traveler from 1800 in words coined before 1800 only.
const sentence =
  "Imagine every book, letter, and song in the world pressed into a single glass thread, so that any man in any town may read, hear, and answer them all in the time it takes to blink.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, sentence);
console.log(`wrote ${target} — ${sentence.length} chars`);
