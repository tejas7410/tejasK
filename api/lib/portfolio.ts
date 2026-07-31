import fs from "fs";
import path from "path";

export function loadPortfolio() {
  const filePath = path.resolve(
    process.cwd(),
   "api",
  "lib",
  "knowledge-base.json"
  );

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}