import { User } from "../models/user.schema";

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

  createUser: async (userData : {name: string, age: number, email: string, password: string}) => {
    try {
      const {name, age, email, password} = userData;

      // const newUser = new User(userData);
      // const saveUser = await newUser.save();
      const newUser = new User({
        name,
        age,
        email,
        password
      })
      
      const saveUser = await newUser.save()
      return saveUser
    } catch (error) {
      console.log(error);
      console.log("Failed to create user");
    }
  },

  updateUser: async (userId: string, userData: { name: string, age: number, email: string, password: string }) => {
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
  }
}

export default UserRepository