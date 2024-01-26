import "dotenv/config";
import pg from "pg";

const pool = new pg.Pool({
  user: process.env.USER_DB,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD_DB,
  port: process.env.DB_PORT,
});

export default pool;
