import { RequestHandler } from "express";

export interface UsercontrollerInterface {
  createUser: RequestHandler;
  updateUser: RequestHandler;
}
