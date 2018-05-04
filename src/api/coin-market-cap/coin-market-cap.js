let exports = (module.exports = {});
import fetch from "node-fetch";
import { URL } from "url";

exports.getList = (req, res) => {
  // Get all cryptos from coinmarketcap
  fetch("https://api.coinmarketcap.com/v2/listings/")
    .then(res => res.json())
    .then(json => res.json({ cryptoList: json.data }));
};

exports.get = (req, res) => {
  // Get a specific cryptos details
  fetch("https://api.coinmarketcap.com/v2/listings/ticker/" + req.params.id)
    .then(res => res.json())
    .then(json => res.json({ crypto: json.data }));
};

exports.getAll = (req, res) => {
  // Get a specific cryptos details
  // Example: https://api.coinmarketcap.com/v2/ticker/?start=101&limit=10
  let url = new URL("https://api.coinmarketcap.com/v2/ticker/"),
    params = { start: req.query.start, limit: req.query.limit };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  fetch(url)
    .then(res => res.json())
    .then(json => res.json({ cryptos: json.data }));
};
