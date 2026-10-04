
import express from "express";

import {
  createHazardLog,
  getOpenHazardLogs,
} from "../controllers/hazardLogController.js";

const router = express.Router();

router.post("/", createHazardLog);

router.post("/open", getOpenHazardLogs);

export default router;
