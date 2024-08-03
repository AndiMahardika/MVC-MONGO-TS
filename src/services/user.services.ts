import UserRepository from "../repositories/user.repository";

const UserServices = {
  getAll: async () => {
    try {
      const allUsers = await UserRepository.getAll();

      // filter DTO      
      // const filteredUsers = allUsers?.map(({ _id, name, age, email }) => ({
      //   id: _id,
      //   name,
      //   age,
      //   email
      // }));
      // return filteredUsers;

      return allUsers;
    } catch (error) {
      console.log(error);
    }
  },

  createUser : async(userData : {name: string, age: number, email: string, password: string}) => {
    try {
      const {name} = userData

      if(typeof name === "string" && name.length > 5){
        return console.log('Nama tidak boleh lebih dari 5 huruf');
      }

      const newUser = await UserRepository.createUser(userData)

      return newUser
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (userId: string, userData: { name: string, age: number, email: string, password: string }) => {
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