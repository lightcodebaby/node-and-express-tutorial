const { readFileSync, writeFileSync } = require("fs");

// reading files

const test01 = readFileSync("./files/test01.txt", "utf-8");
const test02 = readFileSync("./files/test02.txt", "utf-8");

console.log(test01, test02);

// writting files

writeFileSync(
    "./files/test03.txt",
    `Here is the result of adding test01.txt and test02.txt: ${test01}, ${test02}`,
    { flag: "a" }
);
