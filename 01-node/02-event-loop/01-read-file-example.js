'use strict';

const { readFile } = require('fs');

console.log('Started a first task');

readFile('./files/test01.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed first task');
});

console.log('Starting next task');
