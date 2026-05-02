import "dotenv/config";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import booksRoutes from "./routes/booksRoutes.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import job from "./lib/cron.js";

const app = express();
const PORT = process.env.PORT || 3000;

job.start();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", booksRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
  await connectDB();
});
