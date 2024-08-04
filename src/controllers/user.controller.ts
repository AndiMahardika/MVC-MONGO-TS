import { Request, Response } from "express";
import UserServices from "../services/user.services";

const UserController = {
  handleGetAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await UserServices.getAll()
      
      return res 
        .status(200)
        .json({message : "success get data users", data : allUsers})
    } catch (error) {
      console.log(error);
    }
  },

  handleCreateUsers : async (req: Request, res: Response) => {
    const {name, age, email, password} = req.body;
    const saveUser = await UserServices.createUser({name, age, email, password})

    if(!saveUser){
      return res.status(401).json({ message: "Failed Create User" });
    }

    try {  
      return res
        .status(201)
        .json({ message: "User success created!", data: saveUser})
    } catch (error) {
      console.log(error)
    }
  },

  handleUpdateUser : async (req: Request, res: Response) => {
    const {name, age, email, password} = req.body;
    const auth = req.headers.authorization
    const userId = req.params.id;

    if(auth !== "authkey"){
      return res.status(401).json({ message: "Unauthorized" });
    }

    const updateUser = await UserServices.updateUser(userId, {name, age, email, password})
    if(!updateUser){
      return res.status(401).json({ message: "Failed Update" });
    }

    try {
      return res.status(200).json({ message: "User success updated!", data: updateUser });
    } catch (error) {
      console.log(error)
    }
  },

  handleDeleteUser : async (req: Request, res: Response) => {
    try {
      await UserServices.deleteUser(req.params.id)

      return res
              .status(200)
              .json({message: "User success delete!"})
    } catch (error) {
      console.log(error);
    }
  },
}

export default UserController;