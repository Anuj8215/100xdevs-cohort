/* You have been given an express server which has a few endpoints.
Your task is to create a global middleware (app.use) which will
maintain a count of the number of requests made to the server in the global
requestCount variable
*/
const express = require("express");
const app = express();
let requestCount = 0;

app.use(function(req,res,next){
    requestCount = requestCount + 1;
    next();
})

app.get("/requestCount3", function (req, res) {
    res.json({
        msg: "Total requests made: " + requestCount
    })
})
app.get("/requestCount2", function (req, res) {
    res.json({
        msg: "Total requests made: " + requestCount
    })
})

app.get("/requestCount1", function (req, res) {
    res.json({
        msg: "Total requests made: " + requestCount
    })
})

const server = app.listen(3000);
console.log("Server is running on port 3000");

setTimeout(function() {
    server.close();
    console.log("Server is shutting down");
}, 60000); 