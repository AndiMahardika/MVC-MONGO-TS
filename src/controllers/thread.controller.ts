import { Request, Response } from "express";
import ThreadServices from "../services/thread.services";

const ThreadController = {
  handleGetThread: async (req: Request, res: Response) => {
    try {
      const allThread = await ThreadServices.getAll() 

      return res
              .status(200)
              .json({message : "success get data thread", data: allThread})
    } catch (error) {
      console.log(error);
    }
  },

  handleCreateThread: async (req: Request, res: Response) => {
    const {content, category, release, authorId} = req.body;
    // console.log({ content, category, release, authorId });
    
    try {
      const newThread = await ThreadServices.createThread({content, category, release: new Date(), authorId})

      return res
              .status(201)
              .json({message : "success create new thread", data: newThread})
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdateThread: async (req: Request, res: Response) => {
    const {content, category, release, authorId} = req.body;
    // console.log({content, category, release, authorId});
    
    const threadId = req.params.id;
    try {
      const updateThread = await ThreadServices.updateThread(threadId, {content, category, release, authorId})

      return res
              .status(200)
              .json({message : "success update thread", data: updateThread})
    } catch (error) {
      console.log(error);
    }
  },

  handleDeleteThread: async (req: Request, res: Response) => {
    try {
      const threadId = req.params.id
      
      await ThreadServices.deleteThread(threadId);

      return res
              .status(200)
              .json({message : "success delete thread"})
    } catch (error) {
      console.log(error);
    }
  }
}

export default ThreadController;