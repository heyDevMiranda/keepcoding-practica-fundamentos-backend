import mongoose, { Schema } from "mongoose";

const adSchema = mongoose.Schema({
  name: String,
  sale: Boolean,
  price: Number,
  pic: String,
  tags: [String],
});

export const Ad = mongoose.model("Ad", adSchema);
