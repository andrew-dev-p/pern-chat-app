import jwt, { JwtPayload } from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma.js";

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
      };
    }
  }
}

interface DecodedToken extends JwtPayload {
  userId: string;
}

export const protectedRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401).json({ error: "Unauthorized. No token provided" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    if (!decoded) {
      res.status(401).json({ error: "Unauthorized. Invalid token" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
      select: {
        id: true,
        username: true,
        fullname: true,
        profilePicture: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({
      error: "Failed finding user",
      details: error instanceof Error ? error.message : error,
    });
  }
};
