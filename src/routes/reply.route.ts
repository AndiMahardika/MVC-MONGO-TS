import express from "express"
import ReplyController from "../controllers/reply.controller"

export const threadReplies = express.Router()

threadReplies.get("/replies", ReplyController.handleGetReply)
threadReplies.post("/replies", ReplyController.handleCreateReply)
threadReplies.patch("/replies/:id", ReplyController.handleUpdateReply)
threadReplies.delete("/replies/:id", ReplyController.handleDeleteReply)