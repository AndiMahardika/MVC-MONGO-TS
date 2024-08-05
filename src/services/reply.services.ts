import { ObjectId } from "mongoose";
import ReplyRepository from "../repositories/reply.repository";
import { IReply } from "../types/entity";

const ReplyServices = {
  getAll: async () => {
    try {
      const allReplies = await ReplyRepository.getAll()

      return allReplies;
    } catch (error) {
      console.log(error);
    }
  },

  createReply: async (replyData: IReply) => {
    try {
      const newReply = await ReplyRepository.createReply(replyData);
      return newReply
    } catch (error) {
      console.log(error);
    }
  },

  updateReply: async (replyId: string, replyData: IReply) => {
    try {
      const updateReply = await ReplyRepository.updateReply(replyId, replyData)
      return updateReply
    } catch (error) {
      console.log(error);
    }
  },

  deleteReply: async (id: string) => {
    try {
      const replyId = id;

      return await ReplyRepository.deleteReply(replyId);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ReplyServices;