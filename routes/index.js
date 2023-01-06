import express from "express";

export const indexRouter = express.Router();

indexRouter.get("/", (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  res.send('<h2>Endpoint</h2><a href="/ads/search">Anuncios</a></li>');
});
