import { mkdirSync, writeFileSync } from "node:fs";

// Revision 2 (final): trim to the bone — "No water since March" says
// the same neglect in fewer words, and the cactus punch stays last.
const entry =
  "Out of office. No water since March and I've never been more at peace. The cactus has my inbox. Good luck.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
