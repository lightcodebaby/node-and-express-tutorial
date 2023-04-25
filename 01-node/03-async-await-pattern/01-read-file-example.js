'use strict';

const { readFile, writeFile } = require('fs').promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const test01 = await readFile('./files/test01.txt', 'utf-8');
        const test02 = await readFile('./files/test02.txt', 'utf-8');
        await writeFile('./files/test03.txt', `${test01} ${test02}`, {
            flag: a,
        });
        console.log(test01, test02);
    } catch (error) {
        console.log(error);
    }
};

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// getText("./files/test01.txt")
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
