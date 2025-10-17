import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cviRoutes from "./routes/conversation.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();


app.use(express.json());
import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173", // local dev (vite)
  "https://ai-video-agent-frontend.vercel.app" // your Vercel frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use("/api/convo", cviRoutes);


app.get("/", (req, res) => {
  res.json({ message: "Tavus AI Video Agent Backend Running" });
});


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));