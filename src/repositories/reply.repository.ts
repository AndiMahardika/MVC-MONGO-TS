import { ObjectId } from "mongoose";
import {Replies} from "../models/reply.schema"

const ReplyRepository = {
  getAll: async () => {
    try {
      const allReplies = await Replies.find().populate("threadId")

      return allReplies;
    } catch (error) {
      console.log(error);
    }
  },

  createReply: async (replyData: {text: string, threadId: ObjectId}) => {
    try {
      const newReply = new Replies(replyData)
      const saveReply = await newReply.save()
      return saveReply;
    } catch (error) {
      console.log(error);
    }
  },

  updateReply: async (replyId: string, replyData: {text: string, threadId: ObjectId}) => {
    try {
      const {text, threadId} = replyData;
      const updateReply = await Replies.findByIdAndUpdate(
        {_id: replyId},
        {text, threadId},
        {new: true}
      )

      return updateReply

    } catch (error) {
      console.log(error);
    }
  },

  deleteReply: async (id: string) => {
    try {
      const replyId = id
      return await Replies.findByIdAndDelete(replyId);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ReplyRepository;