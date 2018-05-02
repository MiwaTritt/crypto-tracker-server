import fetch from "node-fetch";
import { Router } from "express";

import watchlist from "./watchlist";

export default ({ config, db }) => {
  let router = Router();

  // INDEX - show all cryptos in watchlist
  router.get("/", (req, res) => {
    watchlist.getAll(req, res);
  });

  // CREATE - add new crypto to watchlist
  router.post("/", (req, res) => {
    watchlist.createNew(req, res);
  });

  // SHOW - shows more info about one crypto in watchlist
  router.get("/:id", (req, res) => {
    watchlist.get(req, res);
  });

  return router;
};
