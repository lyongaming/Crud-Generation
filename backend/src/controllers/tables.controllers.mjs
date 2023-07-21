import tableServices from "../services/tables.services.mjs";

export const getTableNames = async(_, res) => {
    const { success, msg, tables } = await tableServices.getTableNames();
    res.status(success ? 200 : 404).json(success ? { msg, tables } : tables);
}

export const getColumnsFromTable = async(req, res) => {
    const { success, msg, columns } = await tableServices.getColumnsFromTable(req.params.table);
    res.status(success ? 200 : 404).json(success ? { msg, columns } : columns);
}