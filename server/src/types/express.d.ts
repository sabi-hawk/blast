declare global {
  namespace Express {
    interface Request {
      user?: any; // Or you can replace 'any' with a more specific type for the decoded user
    }
  }
}

// Ensure this file is treated as a module
export {};
