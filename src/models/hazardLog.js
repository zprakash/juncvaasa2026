
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const HazardLog = sequelize.define(
    "HazardLog",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },

        userPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        callId: {
            type: DataTypes.STRING,
            allowNull: false
        },

        hazardId: {
            type: DataTypes.STRING,
            allowNull: false
        },

        status: {
            type: DataTypes.ENUM("not_checked", "open", "solved"),
            allowNull: false,
            defaultValue: "not_checked",
        },

        severity: {
            type: DataTypes.ENUM("green", "yellow", "red"),
            allowNull: true,
        },

        farmerSaid: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        offeredSolution: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        followUp: {
            type: DataTypes.ENUM(
                "none",
                "recheck",
                "human_callback",
                "expert_booking"
            ),
            allowNull: false,
            defaultValue: "none"
        },

        emergency112Advised: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false        },

        skipQuestion: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    },
    {
        tableName: "hazard_logs",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
    }
);

export default HazardLog;
