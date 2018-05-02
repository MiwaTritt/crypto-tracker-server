import mongoose from "mongoose";

export default callback => {
  mongoose.connect("mongodb://localhost/crypto-tracker").then(
    () => {
      callback(mongoose);
    },
    err => {
      console.log("Connection error: " + err);
    }
  );
};
