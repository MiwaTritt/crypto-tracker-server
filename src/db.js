import mongoose from "mongoose";

export default callback => {
  mongoose.connect("mongodb://localhost/crypto-tracker");
  callback(mongoose);
};
