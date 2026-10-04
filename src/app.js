import express from "express";
import cors from "cors";

import hazardRoutes from "./routes/hazardRoutes.js";
import hazardLogRoutes from "./routes/hazardLogRoutes.js";
const app = express();

app.use(
  cors()
);

app.use(
  express.json()
);

app.get(
  "/",
  (req, res) => {
    return res.json({
      success: true,
      code: 200,
      message: "Risk Check API is running",
      data: null
    });
  }
);

app.get(
  "/health",
  (req, res) => {
    return res.json({
      success: true,
      code: 200,
      message: "API is healthy",
      data: null
    });
  }
);

app.use(
  "/api/v1/hazards",
  hazardRoutes
);

app.use("/api/v1/logs", hazardLogRoutes);

export default app;
