import express from "express";
import { loginUser } from "../controllers/loginController.js";
import { validateUserEmail } from "../../../../Middlewares/validateUserEmail.js";

const router = express.Router();

router.post("/login", validateUserEmail, loginUser);

export default router;
