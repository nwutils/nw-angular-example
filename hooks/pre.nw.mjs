import {
    readFile,
    writeFile,
} from "node:fs/promises";

let manifest = JSON.parse(await readFile("./package.json", { encoding: "utf-8"}));

manifest.main = "index.html"

await writeFile("./dist-ng/package.json", JSON.stringify(manifest));
