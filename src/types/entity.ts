import { ObjectId } from "mongoose";

export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
}

export interface IThread {
  content: string;
  category: string;
  release: Date;
  authorId: ObjectId
}

export interface IReply {
  text: string;
  threadId: ObjectId;
}