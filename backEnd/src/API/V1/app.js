import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { logger } from "logger-express";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
console.log(process.env.PORT);

app.use(express.json());
app.use(cors());
app.use(logger());

//app.use("/API/V1");

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto http://localhost:${PORT}`);
});
