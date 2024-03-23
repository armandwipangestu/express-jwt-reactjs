import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
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

// credentials: true (this allow user to send credentials)
// origin: http://localhost:3000 (this is the domain client who allowed to access this API, because we run reactjs, so it run on port 3000)
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`);
});
