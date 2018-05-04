import { Router } from "express";

import watchlistRouter from "./watchlist";
import coinMarketCapRouter from "./coin-market-cap";

export default ({ config, db }) => {
  let router = Router();

  router.use("/watchlist", watchlistRouter({ config, db }));

  router.use("/crypto", coinMarketCapRouter({ config, db }));

  return router;
};
