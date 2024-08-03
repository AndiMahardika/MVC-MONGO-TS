import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
})

export const User = model("User", userSchema)