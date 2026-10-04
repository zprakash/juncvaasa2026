
import {
  createHazardLog as createHazardLogService,
  findOpenHazardLogs,
} from "../services/hazardLogService.js";

import {
  formatResponseSuccess,
  formatResponseError,
} from "../utils/responseFormatter.js";

export const createHazardLog = async (req, res) => {
  try {
    const {
      user_phone,
      call_id,
      hazard_id,
      status,
      severity,
      farmer_said,
      offered_solution,
      follow_up,
      emergency_112_advised,
      skip_question,
    } = req.body;

    if (!user_phone || !call_id || !hazard_id) {
      return res.status(400).json(
        formatResponseError(
          "user_phone, call_id and hazard_id are required",
          400
        )
      );
    }

    const hazardLog = await createHazardLogService({
      user_phone,
      call_id,
      hazard_id,
      status,
      severity,
      farmer_said,
      offered_solution,
      follow_up,
      emergency_112_advised,
      skip_question,
    });

    return res.status(201).json(
      formatResponseSuccess(
        "Hazard log created successfully",
        201,
        hazardLog
      )
    );
  } catch (error) {
    console.error("createHazardLog:", error);

    return res.status(500).json(
      formatResponseError(
        error.message || "Failed to create hazard log",
        500
      )
    );
  }
};

export const getOpenHazardLogs = async (req, res) => {
  try {
    const { user_phone } = req.body;

    if (!user_phone) {
      return res.status(400).json(
        formatResponseError(
          "user_phone is required",
          400
        )
      );
    }

    const hazardLogs = await findOpenHazardLogs(user_phone);

    return res.status(200).json(
      formatResponseSuccess(
        "Open hazard logs fetched successfully",
        200,
        hazardLogs
      )
    );
  } catch (error) {
    console.error("getOpenHazardLogs:", error);

    return res.status(500).json(
      formatResponseError(
        error.message || "Failed to fetch open hazard logs",
        500
      )
    );
  }
};
