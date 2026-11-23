// Dad Joke Showdown — entry program (program/v1, Node 22, standard library only).
// Writes the entry's single dad joke to /output/entry.txt, byte for byte the
// same on every run. The gate allows 1–200 characters of UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a baker, a therapy couch, and one homophone doing all the work —
// "kneads" lands as "needs" on the first read, and the punchline is the last
// word, the way a dad would deliver it across the dinner table.
const JOKE = "Why did the baker go to therapy? He had too many unmet kneads.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
