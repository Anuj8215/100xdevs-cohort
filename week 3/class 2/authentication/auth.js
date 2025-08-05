const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "Anuj",
    password: "Anuj1234",
    name: "Anuj Pawar",
  },
  {
    username: "Rohit",
    password: "Rohit1234",
    name: "Rohit Sharma",
  },
];

function userExists(username, password) {
  // Write logic
  let exists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      exists = true;
      break;
    }
  }
  return exists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exist or password is incorrect",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;
  res.json({
    users : ALL_USERS
  });
  
});

app.listen(3000);
