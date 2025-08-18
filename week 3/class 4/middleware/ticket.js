const express = require("express");
const app = express();

// Created middleware

function isOldEnough(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.json({
      msg: "You must be at least 18 years old to book this ride.",
    });
  }
}

app.use(isOldEnough);
app.get("/ride1", isOldEnough, function (req, res) {
  res.json({
    msg: "You are eligible to book this ride 1 !",
  });
});

app.get("/ride2", isOldEnough, function (req, res) {
  res.json({
    msg: "You are eligible to book this ride 2 !",
  });
});

app.listen(4000);
console.log("Server is running on port 4000");
