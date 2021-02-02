import { mergeResolvers } from "graphql-tools";
import helloResolver from "./helloResolver";
import userResolver from "./userResolver";
const resolvers = [helloResolver,userResolver];

export default mergeResolvers(resolvers);
