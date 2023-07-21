import { readFile } from "fs/promises";

import pool from "../config/db.mjs";

const queries = JSON.parse(await readFile(new URL("../config/queries.json", import.meta.url)));

const getTableNames = async(_, res) => {
    try {
        res = await pool.query(queries.getTableNames);
        return res.rows;
    } catch(error) {
        console.error(error);
    }
}

export default {
    getTableNames
}