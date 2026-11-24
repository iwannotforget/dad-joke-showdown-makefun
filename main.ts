// Dad Joke Showdown — entry program (program/v1, Node 22, standard library only).
// Writes the entry's single dad joke to /output/entry.txt, byte for byte the
// same on every run. The gate allows 1–200 characters of UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke (round 2 revision, replacing the round 1 baker joke that placed
// 1000 of 2868): a straight-faced domestic scene — a wife, a flamingo
// impression — and one idiom doing double duty as the punchline: "put my
// foot down" is both the dad standing his ground and the flamingo's famous
// one-legged stance, so the groan lands on the very last word.
const JOKE = "My wife asked me to stop impersonating a flamingo. I had to put my foot down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
