import pkg from "pg";

const { Pool } = pkg; 

const pool = new Pool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 5432
});

export default pool;