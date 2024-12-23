import API from "../index";

type LoginPayload = {
  email: string;
  password: string;
};

type SignupPayload = {
  username: string;
  email: string;
  password: string;
};

export const login = (loginData: LoginPayload) =>
  API.post("/auth/login", loginData); // POST request to login endpoint

export const register = (signUpData: SignupPayload) =>
  API.post("/auth/register", signUpData); // POST request to register endpoint
