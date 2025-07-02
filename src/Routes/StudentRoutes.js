import express from "express";
import StudentController from "../Controllers/StudentController.js";

export const studentRoutes = express.Router();

studentRoutes.post("/", StudentController.createStudents);
studentRoutes.get("/", StudentController.getStudents);
studentRoutes.get("/count", StudentController.countStudents);
studentRoutes.get("/:id", StudentController.getStudent);
studentRoutes.put("/:id", StudentController.editStudent)
studentRoutes.delete("/:id", StudentController.deleteStudent)
