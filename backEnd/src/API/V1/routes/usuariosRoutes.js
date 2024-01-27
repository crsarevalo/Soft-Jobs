import express from "express";
import {
  createNewUser,
  getAllUsers,
} from "../controllers/usuariosController.js";
import { loginAuth } from "../../../../Middlewares/loginAuth.js";

const router = express.Router();

router.get("/all_users_auth", loginAuth, getAllUsers);
// Ruta para registrar nuevos usuarios
router.post("/usuarios", createNewUser);

export default router;
