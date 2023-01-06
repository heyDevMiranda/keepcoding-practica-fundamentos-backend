import { express } from "express";
import { Ad } from "../models/ad";

export const router = express.Router();

/* GET home page */
router.get("/", async function (req, res, next) {
  // Coge todos los ads
  const result = await Ad.find();
  // Le pone un header a la respuesta
  res.setHeader("Content-type", "application/json");
  // Envía la respuesta
  res.end(JSON.stringify(result));
});
