// The joke the reviewer laughs at — a program that writes one one-line joke
// about working beside AI coding agents. Node 22, no dependencies, no network.
// Deterministic: the same joke on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent's commit said 'minor cleanup' — then the diff deleted the function and kept its comment, which now lovingly explains code that no longer exists.";

// Guard: the entry must be one line of 1–280 Unicode code points.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.includes("\n")) {
  throw new Error(`Invalid joke: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
