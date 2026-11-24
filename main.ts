// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes a single line of text (1-240 chars) to /output/entry.txt.
// Stdlib only: the grader sandbox runs node22 with no third-party packages.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry line, chosen by head-to-head judging against the field's top
// visible line (see NOTES.md, rounds 0-2). One person's counted practice
// meeting one test: a knot practised a hundred nights in the dark, tied blind
// in a storm, proved by a physical fact, not a witness reaction.
const LINE =
  "She practised the knot a hundred nights in the dark; " +
  "when the storm tore the sail, her hands tied it blind, and the boat held.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 240) {
    throw new Error(`entry must be 1-240 characters, got ${chars}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  // Output dir: explicit argv[2] first (some harnesses pass it), then the
  // MAKEFUN_OUTPUT_DIR env var, then the competition's fixed /output path.
  const outDir =
    process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  console.log(`wrote ${chars} chars to ${outPath}`);
}

main();
