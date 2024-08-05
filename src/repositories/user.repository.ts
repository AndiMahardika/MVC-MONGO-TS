import { User } from "../models/user.schema";
import bcrypt from "bcrypt";
import { IUser } from "../types/entity";

const UserRepository = {
  getAll: async () => {
    try {
      const allUsers = await User.find();
      return allUsers;
    } catch (error) {
      console.log(error);
      console.log("Cannot get from database");
    }
  },

  createUser: async (userData : IUser) => {
    try {
      const {name, age, email, password} = userData;

      const hashPassword = await bcrypt.hash(password, 13)

      // const newUser = new User(userData);
      // const saveUser = await newUser.save();
      const newUser = new User({
        name,
        age,
        email,
        password: hashPassword
      })
      console.log(newUser);
      
      const saveUser = await newUser.save()
      return saveUser
    } catch (error) {
      console.log(error);
      console.log("Failed to create user");
    }
  },

  updateUser: async (userId: string, userData: IUser) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        userData,
        { new: true }
      );
      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (id: string) => {
    try {
      const userId = id;
      return await User.findByIdAndDelete(userId);
    } catch (error) {
      console.log(error);
    }
  },

  loginUser: async (email: string) => {
    try {
      const user = await User.findOne({email})
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserRepository