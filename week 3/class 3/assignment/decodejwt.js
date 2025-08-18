const jwt = require('jsonwebtoken');

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  console.log(decoded);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
