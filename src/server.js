import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();

    console.log("PostgreSQL connected");

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Database connection failed:", error);
  }
};

startServer();
