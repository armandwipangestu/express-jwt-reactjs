import express from "express";
import { Login, Register, getUsers } from "../controllers/Users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", Register);
router.post("/login", Login);

export default router;
