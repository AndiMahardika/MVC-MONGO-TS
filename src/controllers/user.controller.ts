import { Request, Response } from "express";
import UserServices from "../services/user.services";

const UserController = {
  handleGetAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await UserServices.getAll()
      
      return res 
        .status(201)
        .json({message : "success get data users", data : allUsers})
    } catch (error) {
      console.log(error);
      console.log("Failed to get Users")
    }
  },

  handleCreateUsers : async (req: Request, res: Response) => {
    try {
      const {name, age, email, password} = req.body;
      const saveUser = await UserServices.createUser({name, age, email, password})
      
      return res
        .status(201)
        .json({ message: "A user is just created!", data: saveUser})
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Failed to create user"})
    }
  },

  handleUpdateUser : async (req: Request, res: Response) => {
    const {name, age, email, password} = req.body;
    const userId = req.params.id;
    try {
      const updateUser = await UserServices.updateUser(userId, {name, age, email, password})
      res.status(200).json({ message: "User success updated!", data: updateUser });
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "Failed To Update User" });
    }
  },

  handleDeleteUser : async (req: Request, res: Response) => {
    try {
      await UserServices.deleteUser(req.params.id)

      return res
              .status(201)
              .json({message: "User success delete!"})
    } catch (error) {
      console.log(error);

      return res
              .status(400)
              .json({message: "Failed to delete user"})
    }
  },
}

export default UserController