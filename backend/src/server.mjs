import express from "express";
import cors from "cors";
import { config } from "dotenv";

import tablesRoutes from "./routes/tables.routes.mjs";
import usersRoutes from "./routes/users.routes.mjs";

config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tables", tablesRoutes);
app.use("/users", usersRoutes);

app.listen(process.env.PORT, () => console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`))