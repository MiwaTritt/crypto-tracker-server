let exports = (module.exports = {});
import Crypto from "../../models/crypto";

exports.getAll = (req, res) => {
  // Get all cryptos in watchlist from DB
  Crypto.find({}, (err, foundWatchlist) => {
    if (err) {
      console.log(err);
      res.json({ message: "Error retrieving watchlist" });
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
      res.json({ message: "Error retrieving crypto" });
    } else {
      res.json({ message: "Crypto found", crypto: foundCrypto });
    }
  });
};

// UPDATE CAMPGROUND ROUTE
exports.put = (req, res) => {
  Crypto.findByIdAndUpdate(req.params.id, req.body.crypto, function(err, updatedCrypto) {
    if (err) {
      console.log(err);
      res.json({ message: "Error updating crypto" });
    } else {
      res.json({ message: "Crypto updated", crypto: updatedCrypto });
    }
  });
};
