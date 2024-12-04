#!/bin/bash

# Ask for which day to scaffold
read -p "Which day do you want to scaffold? " DAY

# Output the day
echo "Scaffolding day ${DAY}"

# Get the session cookie
AOC_SESSION=$(cat .aocrc)
URL="https://adventofcode.com/2024/day/${DAY}/input"

# Create folder for day
mkdir -p "./src/${DAY}"

# Set the working directory to the day folder
cd "./src/${DAY}"

# Create the input file
curl "${URL}" -H "cookie: session=${AOC_SESSION}" > "input.txt"

# Create the solution file
touch "index.js"

# Add the template to the solution file
tee -a "index.js" <<EOF
import { readFileSync } from "node:fs";
import { join } from "node:path";

const path = join(process.cwd(), "src/${DAY}/input.txt");
const f = readFileSync(path).toString();
const lines = f.split("\n").filter(Boolean);

console.log(lines);
EOF
