import { verifyToken } from "../utilities/jwt";
import { Request, Response, NextFunction } from "express";

// Define the middleware
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from the authorization header

  if (!token) {
    return res.status(401).json({ message: "Access denied, token missing!" });
  }

  try {
    const decoded = verifyToken(token); // Verify the token
    req.user = decoded; // Attach the decoded info to the request object
    next(); // Move to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token!" });
  }
};
