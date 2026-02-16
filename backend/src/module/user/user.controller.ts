import { Request, Response } from "express";
import { UsercontrollerInterface } from "./user.controller.interface";

export class UserController implements UsercontrollerInterface {

  async createUser(req: Request, res: Response): Promise<void> {
    res.status(201).json({
      status: "success",
      message: "true warrior"
    });
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    res.status(200).json({
      status: "success",
      message: "updated"
    });
  }
}
