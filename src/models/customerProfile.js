import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CustomerProfile = sequelize.define(
  "CustomerProfile",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },

    profileData: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {},
    },
  },
  {
    tableName: "customer_profiles",
    timestamps: true,
  }
);

export default CustomerProfile;
