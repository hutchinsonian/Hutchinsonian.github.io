import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the academic homepage", async () => {
  const html = await readFile(
    new URL("../out/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /I’m Jiahui Zhang/);
  assert.match(html, />Publications</);
  assert.match(html, />Blogs</);
  assert.doesNotMatch(html, /Researcher · Personal homepage/);
  assert.match(html, /jiahui-zhang\.webp/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
