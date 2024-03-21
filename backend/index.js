import express from "express";
import dotenv from "dotenv";
import DB from "./config/DB.js";

const app = express();
const PORT = 5000;
dotenv.config();

try {
    await DB.authenticate();
    console.log("Database Connected...!");
} catch (error) {
    console.error(error);
}

app.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`);
});
