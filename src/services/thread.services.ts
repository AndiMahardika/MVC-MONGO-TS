import ThreadRepository from "../repositories/thread.repository";
import { IThread } from "../types/entity";

const ThreadServices = {
  getAll: async() => {
    try {
      const allThread = await ThreadRepository.getAll()
      return allThread
    } catch (error) {
      console.log(error);
    }
  }, 

  createThread: async (threadData: IThread) => {
    try {
      const newThread = await ThreadRepository.createThread(threadData)
      return newThread;
    } catch (error) {
      console.log(error);
    }
  },

  updateThread: async (threadId: string ,threadData: IThread) => {
    try {
      const updateThread = await ThreadRepository.updateThread(threadId, threadData)
      return updateThread;
    } catch (error) {
      console.log(error);
    }
  },

  deleteThread: async (id: string) => {
    try {
      const threadId = id;

      return await ThreadRepository.deleteThread(threadId)
    } catch (error) {
      console.log(error);
    }
  }
}

export default ThreadServices;