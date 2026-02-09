import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  console.log("get users");
});
userRouter.post("/", (req, res) => {
  console.log("create user profile");
});
userRouter.patch("/", (req, res) => {
  console.log("update user profile");
});
userRouter.delete("/", (req, res) => {
  console.log("delete user.");
});

export default userRouter;
