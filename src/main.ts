import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql/rootSchema";
import config from "./config/main";
import "./db/main"

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(config.port, () => {
  console.log("server on port 4000");
});
