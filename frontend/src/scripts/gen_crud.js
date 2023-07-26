// Modulo para leer archivos del proyecto de front
import fs from "fs";

// Leer los datos de la plantilla de react
let fileContent = fs.readFileSync("./crud_template.txt", { encoding: "utf-8" })

// Reemplazar todos los sitios en donde se encuentre el patron tablename y reemplazarlo con
// lo que el usuario pase por consola
fileContent.replace("tablename", process.argv[2]);

// los cambios que se guarden en fileContent van a ser almacenados en un archivo .jsx
// cuyo nombre es igual al nombre que paso el usuario por consola, y va a ser almacenado en una 
// carpeta que se llame como se llama el componente, dentro de la carpeta pages
fs.writeFileSync(`../pages/${process.argv[2]}/${process.argv[2]}.jsx`, fileContent)