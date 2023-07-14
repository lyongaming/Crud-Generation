import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`))