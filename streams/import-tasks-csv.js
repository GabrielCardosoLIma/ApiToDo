import fs from "node:fs";
import { parse } from "csv-parse";

const filePath = new URL("./tasks.csv", import.meta.url);

const stream = fs.createReadStream(filePath);

const csvParse = parse({
  delimiter: ",",
  skipEmptyLines: true,
  from_line: 2,
});

async function processFile() {
  const linesParse = stream.pipe(csvParse);

  for await (const recordLine of linesParse) {
    const [title, description] = recordLine;

    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    // Uncomment this line to see the import working in slow motion (open the db.json)
    // await wait(1000)
  }
}

processFile();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}