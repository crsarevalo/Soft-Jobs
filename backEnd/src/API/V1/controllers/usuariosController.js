import { allUsers, createUser } from "../models/usuariosModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await allUsers();
    res.status(200).json({ user: users });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(400).json({ mensaje: "Error obteniendo usuarios" });
  }
};

const createNewUser = async (req, res) => {
  try {
    const { user } = req.body;
    //console.log("Contenido del objeto user:", user);
    const newUser = await createUser(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(400).json({ mensaje: "Error en la solicitud" });
  }
};

export { createNewUser, getAllUsers };
