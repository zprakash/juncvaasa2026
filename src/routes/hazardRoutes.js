import express from "express";

import {
  listHazards,
  getHazard,
  getHazardDetails
} from "../controllers/hazardController.js";

const router = express.Router();

router.get(
  "/",
  listHazards
);

router.get(
  "/details/:id",
  getHazardDetails
);

router.get(
  "/:id",
  getHazard
);

export default router;
