import mongoose from "mongoose";
import { mongooseConnect } from "../lib/connectMongoose.js";

// Definición del esquema de los anuncios
const adSchema = mongoose.Schema({
  name: String,
  sale: Boolean,
  price: Number,
  pic: String,
  tags: [String],
});

export const Ad = mongoose.model("Ad", adSchema);

// Aseguramos la conexión a Mongo (a través de Mongoose) en cualquier momento en el que se use el modelo de datos
await mongooseConnect();
