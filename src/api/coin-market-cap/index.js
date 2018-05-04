import fetch from "node-fetch";
import { Router } from "express";

import coinMarketCapAPI from "./coin-market-cap";

export default ({ config, db }) => {
  let router = Router();

  // LIST - get all coins
  router.get("/list", (req, res) => {
    coinMarketCapAPI.getAll(req, res);
  });

  // SHOW - gets more info on a specific coin
  router.get("/:id", (req, res) => {
    coinMarketCapAPI.getAll(req, res);
  });

  // INDEX - gets all info on all coins but with a 100 size limit
  router.get("/", (req, res) => {
    coinMarketCapAPI.getAll(req, res);
  });

  return router;
};
