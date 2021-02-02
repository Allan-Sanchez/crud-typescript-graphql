import { IResolvers } from "graphql-tools";

const userResolver: IResolvers = {
  Query: {
    helloUser() {
      return "hello user";
    },
  },
};

export default userResolver;
