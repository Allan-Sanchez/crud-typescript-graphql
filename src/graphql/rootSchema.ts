import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import "graphql-import-node";
import resolvers from "./resolvers/main";
import rootSchema from './schema/main';

export const schema: GraphQLSchema =  makeExecutableSchema({
  typeDefs : rootSchema,
  resolvers
})