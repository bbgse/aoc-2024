import { readFileSync } from "node:fs";
import { join } from "node:path";

const path = join(process.cwd(), "src/1/input.txt");
const f = readFileSync(path).toString();
const lines = f.split("\n");

const left = [];
const right = [];

for (let i = 0; i < lines.length; i++) {
  if (!lines[i].length) break;
  left[i] = parseInt(lines[i].substring(0, 5));
  right[i] = parseInt(lines[i].substring(8));
}

left.sort();
right.sort();

let distance = 0;
for (let i = 0; i < left.length; i++) {
  distance += left[i] > right[i] ? left[i] - right[i] : right[i] - left[i];
}

console.log("Part 1:", distance);
console.log("-".repeat(24));

let similarity = 0;
for (let i = 0; i < left.length; i++) {
  similarity += left[i] * right.filter((x) => x === left[i]).length;
}

console.log("Part 2:", similarity);
console.log("-".repeat(24));
