import pool from "../config/db.mjs";

let queries;

(async() => {
    try {
        queries = await import("../config/queries.json");
    } catch(error) {
        console.error(error)
    }
});

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