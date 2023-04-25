'use strict';

const path = require('path');

// platform separator

console.log(path.sep);

// file paths

const filePath = path.join('/files', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'files', 'test.txt');
console.log(absolute);
