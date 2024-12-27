import jwt from "jsonwebtoken";
import { SECRET } from "../config/app";

// Function to generate a JWT token
export const generateToken = (userId: string, email: string) => {
  const payload = {
    userId,
    email,
  };

  const options = {
    expiresIn: "1h", // Set token expiration time (1 hour)
  };

  const token = jwt.sign(payload, SECRET, options); // Sign the token
  return token;
};

// Function to verify a JWT token
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET); // Verify the token using the secret
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
