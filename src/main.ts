import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql/rootSchema";
const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("server on port 4000");
});
