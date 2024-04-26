import { writeFileSync } from 'fs';

let output = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output.push("BIGBANG");
    } else if (i % 3 === 0) {
        output.push("BIG");
    } else if (i % 5 === 0) {
        output.push("BANG");
    } else {
        output.push(i.toString());
    }
}

// Write the output to a JSON file
writeFileSync("output.json", JSON.stringify(output));

console.log("Output saved to output.json");

