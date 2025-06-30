import express from "express";
import UserController from "../Controllers/UserController.js";

export const studentRoutes = express.Router();

studentRoutes.post("/", UserController.createStudents);
studentRoutes.get("/", UserController.getStudents);
studentRoutes.get("/count", UserController.countStudents);
studentRoutes.get("/:id", UserController.getStudent);
studentRoutes.put("/:id", UserController.editStudent)
studentRoutes.delete("/:id", UserController.deleteStudent)
