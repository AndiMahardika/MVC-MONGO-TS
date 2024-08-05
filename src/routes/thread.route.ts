import express from "express"
import ThreadController from "../controllers/thread.controller"

export const threadRoutes = express.Router()

threadRoutes.get("/", ThreadController.handleGetThread)
threadRoutes.post("/", ThreadController.handleCreateThread)
threadRoutes.patch("/:id", ThreadController.handleUpdateThread)
threadRoutes.delete("/:id", ThreadController.handleDeleteThread)