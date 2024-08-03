import { Schema, model } from "mongoose";

const replySchema = new Schema({
  text: String,
  threadId: {type: Schema.Types.ObjectId, ref: "Thread" }
})

export const Replies = model("Replies", replySchema)