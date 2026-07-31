import dotenv from "dotenv";

// Load .env BEFORE importing anything else
dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Portfolio AI Server running on port ${PORT}`);
  console.log("OpenAI Key Loaded:", !!process.env.GEMINI_API_KEY);
});