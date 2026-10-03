import {
  getAllHazards,
  findHazardById,
  getHazardListItem,
  getHazardOverview,
  getHazardFullDetails
} from "../services/hazardService.js";

import {
  formatResponseSuccess,
  formatResponseError
} from "../utils/responseFormatter.js";

export const listHazards = (
  req,
  res
) => {
  const hazards = getAllHazards();

  const result = hazards.map(
    getHazardListItem
  );

  return res
    .status(200)
    .json(
      formatResponseSuccess(
        "Hazards retrieved successfully",
        200,
        result
      )
    );
};

export const getHazard = (
  req,
  res
) => {
  const { id } = req.params;

  const hazard = findHazardById(id);

  if (!hazard) {
    return res
      .status(404)
      .json(
        formatResponseError(
          "Hazard not found",
          404
        )
      );
  }

  return res
    .status(200)
    .json(
      formatResponseSuccess(
        "Hazard retrieved successfully",
        200,
        getHazardOverview(hazard)
      )
    );
};

export const getHazardDetails = (
  req,
  res
) => {
  const { id } = req.params;

  const hazard = findHazardById(id);

  if (!hazard) {
    return res
      .status(404)
      .json(
        formatResponseError(
          "Hazard not found",
          404
        )
      );
  }

  return res
    .status(200)
    .json(
      formatResponseSuccess(
        "Hazard details retrieved successfully",
        200,
        getHazardFullDetails(hazard)
      )
    );
};
