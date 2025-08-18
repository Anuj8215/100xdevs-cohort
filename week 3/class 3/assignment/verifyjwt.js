const jwt = require("jsonwebtoken");
const jwtPassword = "Anuj";

function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    return false;
  }
}

const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudWoucGF3YXJAZ21haWwuY29tIiwiaWF0IjoxNzU1NTM3NTkwfQ.W0sChVUP2BjpAwELx5-JrokNd4H4PdtdGeyV4CVonuY")
console.log(ans);