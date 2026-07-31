import fs from "fs";
import path from "path";

export function loadPortfolio() {
  const filePath = path.join(
    process.cwd(),
    "server",
    "data",
    "knowledge-base.json"
  );

  const file = fs.readFileSync(filePath, "utf8");

  return JSON.parse(file);
}