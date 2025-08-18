const jwt = require('jsonwebtoken');
const z = require('zod');

// Define the validation schema using Zod
const userSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6)
});

// Function that creates a JWT token with username validation
function generateJWT(username, password) {
  try {
    // Validate the input using Zod schema
    const validatedData = userSchema.parse({ username, password });
    
    // If validation passes, create JWT token
    const token = jwt.sign(
      { username: validatedData.username }, 
      'your-secret-key', // In production, use environment variable
      { expiresIn: '1h' }
    );
    
    return token;
  } catch (error) {
    // Return null if validation fails
    return null;
  }
}

// Function that checks if a JWT can be decoded (not verified)
function canDecodeJWT(token) {
  try {
    jwt.decode(token);
    return true;
  } catch (error) {
    return false;
  }
}

// Function that checks if a JWT can be verified
function canVerifyJWT(token) {
  try {
    jwt.verify(token, 'your-secret-key'); // Same secret key used for signing
    return true;
  } catch (error) {
    return false;
  }
}

// Export functions for testing
module.exports = {
  generateJWT,
  canDecodeJWT,
  canVerifyJWT
};

//  - To test, go to the 02-jwt folder and run `npx jest ./tests`

