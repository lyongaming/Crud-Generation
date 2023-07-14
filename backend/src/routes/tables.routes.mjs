import { Router } from "express";
import { getTableNames } from "../controllers/tables.controllers.mjs";

const router = Router();

router.get("/", getTableNames);

export default router;