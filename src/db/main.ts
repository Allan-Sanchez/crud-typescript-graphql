import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/main";

const dbOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose.connect(config.db_connection, dbOptions);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongodb connection stablished");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});
