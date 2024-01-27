import pool from "../dataBase/usersDB.js";
import bcrypt from "bcryptjs";

console.log("Conectando a la base de datos:", process.env.DB_NAME);

const allUsers = async () => {
  const SQLquery = { text: "SELECT * FROM usuarios" };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const createUser = async ({ email, password, rol, lenguaje }) => {
  const hashedPassword = bcrypt.hashSync(password);

  const SQLquery = {
    text: "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [email, hashedPassword, rol, lenguaje],
  };
  //console.log("query:", SQLquery);

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const findUserByEmail = async ({ email }) => {
  const SQLquery = {
    text: "SELECT * FROM usuarios WHERE email =$1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export { createUser, findUserByEmail, allUsers };
