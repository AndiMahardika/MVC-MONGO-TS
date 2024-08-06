import UserRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { IUser } from "../types/entity";

const UserServices = {
  getAll: async () => {
    try {
      const allUsers = await UserRepository.getAll();

      return allUsers;
    } catch (error) {
      console.log(error);
    }
  },

  createUser : async(userData : IUser) => {
    const {name, password, email} = userData

    const checkCollosion = await UserRepository.checkCollosion(email);
    if(checkCollosion){
      return console.log('email sudah terdaftar');
    }

    if(name.length > 5){
      return console.log('Nama tidak boleh lebih dari 5 huruf');
    }

    if(password.length < 8){
      return console.log('password harus memiliki minimal 8 karakter');
    }

    try {
      const newUser = await UserRepository.createUser(userData)

      return newUser
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (userId: string, userData: IUser) => {
    const {name, password} = userData;

    if(name.length > 5){
      // console.log('Nama tidak boleh lebih dari 5 huruf');
      // return false;
      return console.log('Nama tidak boleh lebih dari 5 huruf');
    }

    if(password.length < 8){
      return console.log('password harus memiliki minimal 8 karakter');
    }

    try {
      const updatedUser = await UserRepository.updateUser(userId, userData);
      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async(id: string) => {
    try {
      await UserRepository.deleteUser(id)
    } catch (error) {
      console.log(error);
    }
  },

  loginUser: async (loginData: {email: string, password: string}) => {
    try {
      const { email, password } = loginData;

      // login validation
      if (!email || password.length < 8) {
        return "Email harus valid dan password harus memiliki minimal 8 karakter";
      }

      const user = await UserRepository.loginUser(email);

      if (!user) {
        return "user not found";
      }

      // password validation
      const isPassMatch = await bcrypt.compare(password, user.password as string);

      if (!isPassMatch) {
        return "incorrect password";
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserServices