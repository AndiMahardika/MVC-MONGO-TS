import { Request, Response } from "express";
import ReplyServices from "../services/reply.services";

const ReplyController = {
  handleGetReply: async (req: Request, res: Response) => {
    try {
      const allReplies = await ReplyServices.getAll();

      return res
              .status(201)
              .json({ message: "Success get data reply", data: allReplies})
    } catch (error) {
      console.log(error);
      return res
              .status(400)
              .json({ message: "Failed get data reply"})
    }
  },

  handleCreateReply: async (req: Request, res: Response) => {
    const {text, threadId} = req.body;
    
    try {
      const newReply = await ReplyServices.createReply({text, threadId})
      
      return res
              .status(201)
              .json({ message: "Success create reply", data: newReply})
    } catch (error) {
      console.log(error);
      return res
              .status(400)
              .json({ message: "Failed create reply"})
    }
  },

  handleUpdateReply: async (req: Request, res: Response) => {
    try {
      const {text, threadId} = req.body;
      const replyId = req.params.id

      const updateReply = await ReplyServices.updateReply(replyId, {text, threadId})

      return res
              .status(201)
              .json({message : "success update reply", data: updateReply})      
    } catch (error) {
      console.log(error);
      return res
              .status(400)
              .json({ message: "Failed to update reply"})
    }
  },

  handleDeleteReply: async (req: Request, res: Response) => {
    try {
      const replyId = req.params.id;

      await ReplyServices.deleteReply(replyId)
      return res
              .status(201)
              .json({message : "success delete reply"})
    } catch (error) {
      console.log(error);
      return res
              .status(400)
              .json({ message: "Failed to delete reply"})
    }
  }

}

export default ReplyController;