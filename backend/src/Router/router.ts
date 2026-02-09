import { Router } from "express";
import { userRouter } from "../Utility/import";

const attendenceRouter = Router();

attendenceRouter.use(userRouter);

export default attendenceRouter;
