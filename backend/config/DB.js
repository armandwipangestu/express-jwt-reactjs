import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOSTNAME = process.env.DB_HOSTNAME;
const DB_PORT = process.env.DB_PORT;
const DB_PROVIDER = process.env.DB_PROVIDER;

const DB = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    port: DB_PORT,
    dialect: DB_PROVIDER,
});

export default DB;
