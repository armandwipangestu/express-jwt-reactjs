import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import DB from "./config/DB.js";
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = 5000;

try {
    await DB.authenticate();
    console.log("Database Connected...!");
    // Create Table from UserModel
    // await Users.sync();
} catch (error) {
    console.error(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`);
});
