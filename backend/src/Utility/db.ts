import { Sequelize } from "sequelize";
import { initializeModels } from "../model intializer/user.model.intialize";

export const sequelize = new Sequelize("face-detection", "root", "root", {
  host: "localhost",
  dialect: "mysql", // or postgres
  logging: false,
});

// Test connection
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Unable to connect to DB:", error);
  }
};

const UserModel = initializeModels(sequelize);
