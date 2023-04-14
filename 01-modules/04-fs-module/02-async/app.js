"use strict";

const { readFile, writeFile } = require("fs");

readFile("./files/test01.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const test01 = result; // this would be the functionality
    readFile("./files/test02.txt", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const test02 = result;
        writeFile(
            "./files/test03.txt",
            `Here is the result of adding test01.txt and test02.txt: ${test01}, ${test02}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    });
});
