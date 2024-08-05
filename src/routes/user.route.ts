import express from "express"
import UserController from "../controllers/user.controller"

export const userRoutes = express.Router()

userRoutes.get("/", UserController.handleGetAllUsers)
userRoutes.post("/", UserController.handleCreateUsers)
userRoutes.post("/login", UserController.handleLoginUser)
userRoutes.delete("/:id", UserController.handleDeleteUser)
userRoutes.patch("/:id", UserController.handleUpdateUser)