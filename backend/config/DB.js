import { Sequelize } from "sequelize";

// const DB = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOSTNAME,
//         dialect: "mysql",
//     }
// );

const DB = new Sequelize("express_jwt_reactjs", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default DB;
