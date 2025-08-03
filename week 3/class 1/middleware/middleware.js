// Middleware for user authentication and kidney checkup

const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
    if (username === "Anuj" && password === "Anuj@123") {
        res.json({
            msg: "user is authenticated",
        });
    } else {
        res.status(401).json({
            msg: "Authentication failed",
        });
    }
    next();
}

function kidneyMiddleware(req, res, next) {
    if (kidneyId == 1 || kidneyId == 2) {
        res.json({
            msg: "Kidney is fine",
        });
    } else {
        res.status(400).json({
            msg: "Invalid kidneyId",
        });
    }
    next();
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Health checkup completed successfully");
});

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Kidney checkup completed successfully");
});

app.get('/heart-checkup', 
    userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Heart checkup completed successfully");
});
