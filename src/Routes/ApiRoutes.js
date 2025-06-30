import express from "express";
import {studentRoutes} from "./StudentsRoutes.js";

export const apiRoutes = express.Router();

apiRoutes.use("/students", studentRoutes);
