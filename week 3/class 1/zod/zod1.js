const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());

const schema = zod.array(zod.number());
const userSchema = zod.object({
  email: zod.string,
  passwords: zod.string,
  region: zod.literal("IN").or(zod.literal("USA")),
});

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.send({
      msg: "Something is wrong",
    });
  } else {
    res.status(411).json({
      msg: "Something went wrong",
    });
  }
});
app.listen(3000);
