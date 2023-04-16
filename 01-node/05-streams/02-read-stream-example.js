"use strict";

const { createReadStream } = require("fs");

const stream = createReadStream("./files/big.txt", {
    highWaterMark: 64000,
    //encoding: "utf-8",
});

stream.on("data", (result) => {
    console.log(result);
});

stream.on("error", (error) => {
    console.log(error);
});
