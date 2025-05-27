import express from "express";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/messages.route.js";

const app = express();

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
