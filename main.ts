import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Imagine every book, letter, and song in the world pressed into a single glass thread, so that any man in any town may read, hear, and answer them all in the time it takes to blink.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(`wrote entry.txt (${line.length} chars)`);
