"use strict";

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Most provide a name"],
        trim: true,
        maxlength: [20, "Name can not be more than 20 characters"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Task", taskSchema);
