import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let filePath = path.join(__dirname, "crud_template.txt");
let fileContent = fs.readFileSync(filePath, "utf-8");

fileContent = fileContent.replace(/tablename/g, process.argv[2]);

const pagesPath = path.join(__dirname, "../pages");
const dirPath = path.join(__dirname, `../pages/${[process.argv[2]]}`);
filePath = path.join(__dirname, `../pages/${[process.argv[2]]}/${[process.argv[2]]}.jsx`);
if(fs.existsSync(pagesPath)) {
    if(fs.existsSync(filePath)) {
        console.log("The file already exists")
    } else {
        fs.mkdirSync(dirPath);
        fs.writeFileSync(filePath, fileContent);
        console.log(`${process.argv[2]}.jsx file created`);
    }
} else {
    fs.mkdirSync(pagesPath);
    fs.mkdirSync(dirPath);
    fs.writeFileSync(filePath, fileContent);
    console.log(`${process.argv[2]}.jsx file created`);
}