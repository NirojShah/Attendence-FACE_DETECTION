import { RequestHandler } from "express";
import { UsercontrollerInterface } from "./user.controller.interface";

export class UserController implements UsercontrollerInterface {
  createUser: RequestHandler = async (req, res) => {
    res.status(201).json({
      status: "success",
      message: "true warrior",
    });
  };

  updateUser: RequestHandler = async (req, res) => {
    res.status(200).json({
      status: "success",
      message: "updated",
    });
  };
}
