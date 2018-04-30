import mongoose from "mongoose";

const CryptoSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  notes: String,
  expirationDate: Date,
  active: { type: Boolean, required: true, default: true },
  targetPrice: Number
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true
  // }
});

export default CryptoSchema;
