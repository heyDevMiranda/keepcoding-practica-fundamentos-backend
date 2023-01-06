import express from "express";
import { Ad } from "../models/ad.js";

export const adsRouter = express.Router();

/* GET home page */
adsRouter.get("/", async function (req, res, next) {
  try {
    // Coge todos los ads
    const result = await Ad.find();
    // Le pone un header a la respuesta
    res.setHeader("Content-type", "application/json");
    // Envía la respuesta
    res.end(JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
});
