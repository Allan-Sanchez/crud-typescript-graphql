import { IResolvers } from "graphql-tools";
import User from "../../models/user";

const userResolver: IResolvers = {
  Query: {
    async getUsers() {
      return await User.find();
    },
    async getUser(_: any, arg: any) {
      let { id } = arg;
      return await User.findById(id);
    },
  },
  Mutation: {
    async newUser(_: any, arg: any) {
      let { input } = arg;
      const newUserDB = new User(input);
      return await newUserDB.save();
    },

    async deleteUser(_: any, arg: any) {
      let { id } = arg;
      try {
        await User.findOneAndDelete(id);
      } catch (error) {
        console.log(error);
      }
      return "Delete successfully";
    },

    async updateUser(_: any, arg: any) {
      let {id,input} = arg;
      return await User.findOneAndUpdate(id,input,{new:true});
    },
  },
};

export default userResolver;
