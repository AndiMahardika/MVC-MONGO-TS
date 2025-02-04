import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { userRoutes } from "./routes/user.route"
import { threadRoutes } from "./routes/thread.route"
import { threadReplies } from "./routes/reply.route"
dotenv.config()

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {console.log("Mongodb connection success")})
  .catch( err => {
    console.log("Mongodb connection failed");
    console.log(err);
  })

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)
app.use("/threads", threadRoutes)
app.use("/replies", threadReplies)

app.listen(process.env.PORT, () => {
  console.log(`Server running at port, ${process.env.PORT}`);
})