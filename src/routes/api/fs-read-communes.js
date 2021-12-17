import { mode } from "$app/env";
import fs from "fs";

// Weirdly, using a `JSON.parse` and `fs.readFileSync` is way faster than the `import` syntax.
const communes = loadJsonFile("src/communes.json");

function loadJsonFile(path) {
  // The production condition is a small hack for `npm run build && npm run preview`
  const relativeRoot = "../../../" + (mode === "production" ? "../" : "");
  const absolutePath = new URL(relativeRoot + path, import.meta.url).pathname;

  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
}

export async function get() {
  return { body: communes.length.toString() };
}
