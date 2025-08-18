/* Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. 
Should return null if the username  is not valid email or if the password is less than 6 characters. Using the zod library for validation.
*/

const jwt = require("jsonwebtoken");
const jwtPassword = "Anuj";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign({
      username,
    },
    jwtPassword
  );

  return signature;
}

const ans = signJwt("anuj.pawar@gmail.com", "Anuj123");
console.log(ans);

