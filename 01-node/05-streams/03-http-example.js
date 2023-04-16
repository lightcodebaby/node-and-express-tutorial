"use strict";

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    // const text = fs.readFileSync("./files/big.txt");
	// res.end(text);
    const fileStream = fs.createReadStream("./files/big.txt", "utf-8");
    fileStream.on("open", () => {
        fileStream.pipe(res);
    });
    fileStream.on("error", (error) => {
        res.end(error);
    });
}).listen(5000);
