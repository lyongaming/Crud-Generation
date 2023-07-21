import { readFile } from "fs/promises";

import pool from "../config/db.mjs";

const queries = JSON.parse(await readFile(new URL("../config/queries.json", import.meta.url)));

const getTableNames = async() => {
    let response = {
        success: false,
        msg: "",
        tables: []
    }
    try {
        const result = await pool.query(queries.getTableNames);
        response = {
            ...response,
            success: true,
            msg: "Table names readed",
            tables: result.rows
        }
    } catch(error) {
        console.error(error);
        response = {
            ...response,
            msg: "No tables in database",
        }
    }
    return response;
}

const getColumnsFromTable = async(tableName) => {
    let response = {
        success: false,
        msg: "",
        columns: []
    }

    try {
        const result = await pool.query(queries.getColumnsFromTable, [tableName]);
        const columns = result.rows[0].columns;
        response = {
            ...response,
            success: true,
            msg: "Columns returned",
            columns
        }
    } catch(error) {
        console.error(error);
        response = {
            ...response,
            msg: "Table has no columns"
        }
    }
    return response;
};

export default {
    getTableNames,
    getColumnsFromTable
}