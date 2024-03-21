import { Sequelize } from "sequelize";
import DB from "../config/DB.js";

const { DataTypes } = Sequelize;

const Users = DB.define(
    "users",
    {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        refresh_token: {
            type: DataTypes.TEXT,
        },
    },
    {
        freezeTableName: true,
    }
);

export default Users;
