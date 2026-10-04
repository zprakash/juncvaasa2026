
import HazardLog from "../models/hazardLog.js";

export const createHazardLog = async (data) => {
  const hazardLog = await HazardLog.create({
    userPhone: data.user_phone,
    callId: data.call_id,
    hazardId: data.hazard_id,
    status: data.status ?? "not_checked",
    severity: data.severity ?? null,
    farmerSaid: data.farmer_said ?? null,
    offeredSolution: data.offered_solution ?? null,
    followUp: data.follow_up ?? "none",
    emergency112Advised: data.emergency_112_advised ?? false,
    skipQuestion: data.skip_question ?? false,
  });

  return {
    id: hazardLog.id,
    user_phone: hazardLog.userPhone,
    call_id: hazardLog.callId,
    hazard_id: hazardLog.hazardId,
    status: hazardLog.status,
    severity: hazardLog.severity,
    farmer_said: hazardLog.farmerSaid,
    offered_solution: hazardLog.offeredSolution,
    follow_up: hazardLog.followUp,
    emergency_112_advised: hazardLog.emergency112Advised,
    skip_question: hazardLog.skipQuestion,
    created_at: hazardLog.createdAt,
  };
};

export const findOpenHazardLogs = async (userPhone) => {
  const logs = await HazardLog.findAll({
    where: {
      userPhone,
      status: "open",
    },
    order: [["created_at", "DESC"]],
  });

  return logs.map((log) => ({
    hazard_id: log.hazardId,
    status: log.status,
    severity: log.severity,
    farmer_said: log.farmerSaid,
    offered_solution: log.offeredSolution,
    times_asked: 1,
    last_asked_at: log.createdAt,
  }));
};
