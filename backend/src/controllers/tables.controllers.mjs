import tableServices from "../services/tables.services.mjs";

export const getTableNames = async(_, res) => {
    try {
        const tables = await tableServices.getTableNames();
        res.json({ tables });
    } catch(error) {
        console.error(error);
        res.status(500).json({ msg: "Server Error" })
    }
}