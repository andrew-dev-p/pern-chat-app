import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/messages.route.js";
import { app, server } from "./socket/socket.js";

app.use(express.json());
app.use(cookieParser());

import dotenv from "dotenv";
dotenv.config();

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT!;

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
