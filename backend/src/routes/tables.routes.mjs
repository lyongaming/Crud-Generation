import { Router } from "express";
import { getColumnsFromTable, getTableNames } from "../controllers/tables.controllers.mjs";

const router = Router();

router.get("/", getTableNames);

router.get("/:table", getColumnsFromTable);

export default router;