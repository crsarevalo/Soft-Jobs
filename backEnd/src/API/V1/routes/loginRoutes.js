import express from "express";
import { loginUser } from "../controllers/loginController.js";

const router = express.Router();

router.post("/auth_login", loginUser);

export default router;
