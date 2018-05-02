import assert from "assert";
import sinon from "sinon";

import watchlistRouter from "../../api/watchlist/watchlist";
import Crypto from "../../models/crypto";

import cryptoTestData from "../data/model-crypto";

describe("watchlistRoutes", function() {
  beforeEach(function() {
    sinon.stub(Crypto, "find");
  });

  afterEach(function() {
    Crypto.find.restore();
  });

  it("should send the entire watchlist", function() {
    Crypto.find.yields(null, cryptoTestData.collections.cryptos);
    var req = { params: {} };
    var res = {
      json: sinon.stub()
    };

    watchlistRouter.getAll(req, res);

    sinon.assert.calledWith(res.json, {
      message: "Watchlist found",
      watchlist: cryptoTestData.collections.cryptos
    });
  });
});
