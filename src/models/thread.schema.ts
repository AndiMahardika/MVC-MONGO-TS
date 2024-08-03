import { Schema, model } from "mongoose";

const threadSchema = new Schema({
  content: String,
  category: String,
  release: Date,
  authorId: {type: Schema.Types.ObjectId, ref: "User" }
})

export const Thread = model("Thread", threadSchema)