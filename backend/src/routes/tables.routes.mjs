import { Router } from "express";
import { 
    getColumnsFromTable, 
    getTableData, 
    getTableNames 
} from "../controllers/tables.controllers.mjs";

const router = Router();

router.get("/", getTableNames);

router.get("/:table", getColumnsFromTable);

router.get("/read/:table", getTableData);

export default router;