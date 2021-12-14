import fs from "fs";

// Weirdly, using a `JSON.parse` and `fs.readFileSync` is 50x faster than the `import` syntax.
const communes = loadJsonFile(
  "node_modules/@etalab/decoupage-administratif/data/communes.json"
);

function loadJsonFile(path) {
  const absolutePath = new URL("../../../" + path, import.meta.url).pathname;
  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
}

export async function get() {
  return { body: communes.length.toString() };
}
