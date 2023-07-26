import { readFile } from "fs/promises";

import pool from "../config/db.mjs";

const queries = JSON.parse(await readFile(new URL("../config/queries.json", import.meta.url)));

const getUsers = async() => {
    const result = await pool.query(queries.getUsers);
    return result.rows;
}

export default {
    getUsers
}