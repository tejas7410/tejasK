import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chat";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Portfolio AI Backend is running 🚀",
  });
});

// Routes
app.use("/api/chat", chatRoutes);

export default app;