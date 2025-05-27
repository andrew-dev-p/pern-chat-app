import { Request, Response } from "express";
import prisma from "../lib/prisma.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    generateToken(user.id, res);

    res.status(201).json({
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    res.status(500).json({
      error: "Login failed",
      details: error instanceof Error ? error.message : error,
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, fullname, password, confirmPassword, gender } = req.body;

    if (!username || !fullname || !password || !confirmPassword || !gender) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    if (password !== confirmPassword) {
      res.status(400).json({ error: "Passwords do not match" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      res.status(400).json({ error: "Username already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const user = await prisma.user.create({
      data: {
        username,
        fullname,
        password: hashedPassword,
        gender,
        profilePicture:
          gender === "MALE" ? boyProfilePicture : girlProfilePicture,
      },
    });

    generateToken(user.id, res);

    res.status(201).json({
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    res.status(500).json({
      error: "Registration failed",
      details: error instanceof Error ? error.message : error,
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Registration failed",
      details: error instanceof Error ? error.message : error,
    });
  }
};
