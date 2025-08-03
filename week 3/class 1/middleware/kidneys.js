const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys; // Access data from request body

  if (!kidneys) {
    return res.status(400).json({
      msg: "Please provide kidneys data in the request",
    });
  }

  if (kidneys.length > 0) {
    res.json({
      msg: "Your kidneys are " + kidneys,
    });
  } else {
    res.json({
      msg: "You have no kidneys",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
