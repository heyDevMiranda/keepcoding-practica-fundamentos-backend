import mongoose, { Schema } from "mongoose";

// Definición del esquema de los anuncios
const adSchema = mongoose.Schema({
  name: String,
  sale: Boolean,
  price: Number,
  pic: String,
  tags: [String],
});

export const Ad = mongoose.model("Ad", adSchema);
