const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const server = app.listen(3000);
console.log("Server is running on port 3000");

setTimeout(function() {
    server.close();
    console.log("Server is shutting down");
}, 60000); 
