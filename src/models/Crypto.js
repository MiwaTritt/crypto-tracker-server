import mongoose from "mongoose";

const Crypto = new mongoose.Schema({
  symbol: String,
  name: String,
  notes: String,
  expirationDate: Date,
  active: Boolean,
  targetPrice: Number
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User"
  // }
});

export default Crypto;
