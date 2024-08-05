import express from "express"
import ReplyController from "../controllers/reply.controller"

export const threadReplies = express.Router()

threadReplies.get("/", ReplyController.handleGetReply)
threadReplies.post("/", ReplyController.handleCreateReply)
threadReplies.patch("/:id", ReplyController.handleUpdateReply)
threadReplies.delete("/:id", ReplyController.handleDeleteReply)