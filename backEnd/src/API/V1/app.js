import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { logger } from "logger-express";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger());

app.use("/API/V1", usuariosRoutes);
app.use("/API/V1", loginRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto http://localhost:${PORT}`);
});
