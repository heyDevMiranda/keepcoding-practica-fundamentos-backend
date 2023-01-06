"use strict";

// Inicializar la base datos con los datos mínimos para funcionar
const readline = require("readline");

// Cargamos los modelos
import { Ad } from "./models/ad";

async function main() {
  // Pregunta al usuario si está seguro
  const continuar = await preguntaSiNo(
    "¿Estas seguro, seguro, seguro, que quieres borrar la base de datos?"
  );
  if (!continuar) {
    process.exit();
  }

  // Conectar a la base de datos
  const connection = require("./lib/connectMongoose");

  // Inicializar la colección de anuncios
  await initAds();

  // Desconectamos de la base de datos
  connection.close();
}

main().catch((err) => console.log("Ha habido un error", err));

async function initAds() {
  // Borra todos los documentos de la colección de anuncios
  const result = await Ad.deleteMany();
  console.log(`Eliminados ${result.deletedCount} anuncios.`);

  // Crea los anuncios iniciales
  const inserted = await Ad.insertMany([
    { name: "Prueba1", sale: true, price: 1, pic: "", tags: [""] },
    { name: "Prueba2", sale: false, price: 1, pic: "", tags: [""] },
    { name: "Prueba3", sale: true, price: 1, pic: "", tags: [""] },
    { name: "Prueba4", sale: false, price: 1, pic: "", tags: [""] },
    { name: "Prueba5", sale: true, price: 1, pic: "", tags: [""] },
  ]);
  console.log(`Creados ${inserted.length} anuncios.`);
}

function preguntaSiNo(texto) {
  return new Promise((resolve, reject) => {
    const myInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    myInterface.question(texto, (respuesta) => {
      myInterface.close();
      if (respuesta.toLowerCase() === "si") {
        resolve(true);
        return;
      }
      resolve(false);
    });
  });
}
