const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.header.username;
  const password = req.header.password;
  const kidneyId = req.query.kidneyId;

  if (username === "Anuj" && password === "Anuj") {
    if (kidneyId == 1 || kidneyId == 2) {
      res.json({
        msg: "Kidney is fine",
      });
    } else {
      res.status(400).json({
        msg: "Invalid kidneyId",
      });
    }
  } else {
    res.status(401).json({
      msg: "Authentication failed",
    });
  }
});

app.listen(3000);