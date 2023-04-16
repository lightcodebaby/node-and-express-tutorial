"use strict";

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
    console.log(`data received: name: ${name} age: ${age}`);
});

customEmitter.on("response", () => {
    console.log("data received: 2");
});

customEmitter.emit("response", "ruben", 28);
