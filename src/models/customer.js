import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Customer = sequelize.define(
  "Customer",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    customerType: {
      type: DataTypes.ENUM(
        "private",
        "business",
        "agriculture"
      ),
      allowNull: false,
      defaultValue: "private",
    },

    language: {
      type: DataTypes.STRING,
      defaultValue: "en",
    },
  },
  {
    tableName: "customers",
    timestamps: true,
  }
);

export default Customer;
