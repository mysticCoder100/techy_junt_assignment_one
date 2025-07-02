import express from "express";
import {studentRoutes} from "./StudentRoutes.js";

export const apiRoutes = express.Router();

apiRoutes.use("/students", studentRoutes);
