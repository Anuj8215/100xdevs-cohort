const jwt = require("jsonwebtoken");

const value = {
    name: "Anuj Pawar",
    accountNumber : "1234567890",
};
const token = jwt.sign(value,"secret");
console.log("The token is : " + token);