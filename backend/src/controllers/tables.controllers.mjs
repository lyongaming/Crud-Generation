import tableServices from "../services/tables.services.mjs";

export const getTableNames = async(_, res) => {
    const { success, msg, tables } = await tableServices.getTableNames();
    res.status(success ? 200 : 404).json(success ? { msg, tables } : tables);
}

export const getColumnsFromTable = async(req, res) => {
    const { success, msg, columns } = await tableServices.getColumnsFromTable(req.params.table);
    res.status(success ? 200 : 404).json(success ? { msg, columns } : columns);
}

export const getTableData = async(req, res) => {
    const { success, msg, data } = await tableServices.getTableData(req.params.table);
    res.status(success ? 200 : 404).json(success ? { msg, data } : data);
}

export const getColumnsInfo = async(req, res) => {
    const { success, msg, info } = await tableServices.getColumnsInfo(req.params.table);
    res.status(success ? 200 : 404).json(success ? { msg, info } : info);
}