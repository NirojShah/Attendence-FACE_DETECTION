import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import attendenceRouter from "./src/Router/router";

const app = express();

app.use(cors());
app.use(fileUpload());

app.use(attendenceRouter);

export default app;
