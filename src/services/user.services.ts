import UserRepository from "../repositories/user.repository";

const UserServices = {
  getAll: async () => {
    try {
      const allUsers = await UserRepository.getAll();

      return allUsers;
    } catch (error) {
      console.log(error);
    }
  },

  createUser : async(userData : {name: string, age: number, email: string, password: string}) => {
    const {name} = userData

    if(name.length > 5){
      return console.log('Nama tidak boleh lebih dari 5 huruf');
    }

    try {
      const newUser = await UserRepository.createUser(userData)

      return newUser
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (userId: string, userData: { name: string, age: number, email: string, password: string }) => {
    const {name} = userData;

    if(name.length > 5){
      // console.log('Nama tidak boleh lebih dari 5 huruf');
      // return false;
      return console.log('Nama tidak boleh lebih dari 5 huruf');
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
  }
}

export default UserServices