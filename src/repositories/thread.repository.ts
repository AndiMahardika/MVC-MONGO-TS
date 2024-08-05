import { Thread } from "../models/thread.schema"
import { IThread } from "../types/entity";

const ThreadRepository = {
  getAll: async () => {
    try {
      const allThread = await Thread.find().populate("authorId")
      return allThread
    } catch (error) {
      console.log(error);
    }
  },

  createThread: async (threadData: IThread) => {
    try {
      const newThread = new Thread(threadData)
      const saveThread = await newThread.save()

      return saveThread;
    } catch (error) {
      console.log(error);
    }
  },

  updateThread: async (threadId: string, threadData: IThread) => {
    try {
      const {content, category, release, authorId} = threadData

      const updateThread = await Thread.findOneAndUpdate(
        {_id: threadId},
        {content, category, release, authorId},
        {new: true}
      )

      return updateThread;
    } catch (error) {
      console.log(error);
    }
  },

  deleteThread: async (id: string) => {
    try {
      const threadId = id;

      return await Thread.findByIdAndDelete(threadId)
    } catch (error) {
      console.log(error);
    }
  }
}

export default ThreadRepository;