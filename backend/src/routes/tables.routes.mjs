import { Router } from "express";
import { 
    getColumnsFromTable, 
    getColumnsInfo, 
    getTableData, 
    getTableNames 
} from "../controllers/tables.controllers.mjs";

const router = Router();

router.get("/", getTableNames);

router.get("/:table", getColumnsFromTable);

router.get("/read/:table", getTableData);

router.get("/columns/:table", getColumnsInfo);

export default router;