import { Router } from "express";
import { getUsers } from "../controllers/users.controllers.mjs";

const router = Router();

router.get("/", getUsers);

export default router;