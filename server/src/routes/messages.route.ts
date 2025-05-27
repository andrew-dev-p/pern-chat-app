import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/messages.controller.js";

const router = express.Router();

router.get("/conversations", protectedRoute, getUsersForSidebar);

router.post("/send/:id", protectedRoute, sendMessage);

router.get("/:id", protectedRoute, getMessages);

export default router;
