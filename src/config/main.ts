import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  db_connection: process.env.DB_CONNECTION || "mongodb://localhost/api_typescript_mongoose",
};

export default config;
