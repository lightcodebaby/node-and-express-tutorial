"use strict";

const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "ruben") {
        req.user = { name: "ruben", age: 28 };
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
};

module.exports = authorize;
