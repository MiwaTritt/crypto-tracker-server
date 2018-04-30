import { Router } from "express";

import watchlistRouter from "./watchlist";

export default ({ config, db }) => {
  let router = Router();

  router.use("/watchlist", watchlistRouter({ config, db }));

  return router;
};
