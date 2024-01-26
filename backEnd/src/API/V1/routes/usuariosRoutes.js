import express from "express";
import { createNewUser } from "../controllers/usuariosController.js";

const router = express.Router();

// Ruta para registrar nuevos usuarios
router.post("/usuarios", createNewUser);

export default router;
