import express from "express";
import {
  login,
  register,
  logout,
  getMe,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";

const router = express.Router();

router.get("/me", protectedRoute, getMe);

router.post("/login", login);

router.post("/register", register);

router.post("/logout", logout);

export default router;
