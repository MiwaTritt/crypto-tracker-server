let exports = (module.exports = {});
import Crypto from "../../models/crypto";

exports.getAll = (req, res) => {
  // Get all cryptos in watchlist from DB
  Crypto.find({}, (err, foundWatchlist) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ message: "Watchlist found", watchlist: foundWatchlist });
    }
  });
};

exports.createNew = (req, res) => {
  const crypto = {
    symbol: req.body.symbol,
    name: req.body.name,
    notes: req.body.notes,
    expirationDate: req.body.expirationDate,
    active: req.body.active,
    targetPrice: req.body.targetPrice
  };
  Crypto.create(crypto, (err, newCrypto) => {
    if (err) {
      console.log(err);
      res.json({ message: "Error adding crypto to watchlist" });
    } else {
      res.json({ message: "Crypto added to watchlist", crypto: newCrypto });
    }
  });
};

exports.get = (req, res) => {
  Crypto.findById(req.params.id, (err, foundCrypto) => {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/show", { crypto: foundCrypto });
    }
  });
};
