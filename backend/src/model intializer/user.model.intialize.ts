import { Sequelize } from "sequelize";
import { userModel } from "../module/user/user.model";

export const initializeModels = (sequelize: Sequelize) => {
  const intializedModel: object = {};
  const models = {
    User: userModel,
  };

  for (const model in models) {
  }

  return models;
};
