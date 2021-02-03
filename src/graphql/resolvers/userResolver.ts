import { IResolvers } from "graphql-tools";
import User from "../../models/user";

const userResolver: IResolvers = {
  Query: {
    helloUser() {
      return "hello user";
    },
    async getUsers(){
      return await User.find();
    }
  },
  Mutation: {
    async newUser(_: any, arg: any) {
      let {input} = arg;
        const newUserDB = new User(input);
        return await newUserDB.save();
    },
  },
};

export default userResolver;
