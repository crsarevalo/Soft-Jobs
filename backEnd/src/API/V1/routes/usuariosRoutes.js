import express from "express";
import {
  createNewUser,
  getAllUsers,
} from "../controllers/usuariosController.js";
import { loginAuth } from "../../../../Middlewares/loginAuth.js";

const router = express.Router();

router.get("/usuarios", loginAuth, getAllUsers);
router.post("/usuarios", createNewUser);

export default router;
