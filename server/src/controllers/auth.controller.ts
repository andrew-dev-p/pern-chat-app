import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.send("Login page");
};

export const register = (req: Request, res: Response) => {
  res.send("Register page");
};

export const logout = (req: Request, res: Response) => {
  res.send("Logout page");
};
