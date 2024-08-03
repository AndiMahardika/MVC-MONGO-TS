import express from "express"
import ThreadController from "../controllers/thread.controller"

export const threadRoutes = express.Router()

threadRoutes.get("/threads", ThreadController.handleGetThread)
threadRoutes.post("/threads", ThreadController.handleCreateThread)
threadRoutes.patch("/threads/:id", ThreadController.handleUpdateThread)
threadRoutes.delete("/threads/:id", ThreadController.handleDeleteThread)