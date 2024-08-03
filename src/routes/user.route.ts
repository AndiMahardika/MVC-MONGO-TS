import express from "express"
import UserController from "../controllers/user.controller"

export const userRoutes = express.Router()

userRoutes.get("/users", UserController.handleGetAllUsers)
userRoutes.post("/users", UserController.handleCreateUsers)
userRoutes.delete("/users/:id", UserController.handleDeleteUser)
userRoutes.patch("/users/:id", UserController.handleUpdateUser)