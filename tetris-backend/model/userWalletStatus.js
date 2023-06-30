import mongoose from "mongoose";

const userWalletSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
  },
  walletStatus: {
    type: String,
  },
});

export const userWalletStatus = mongoose.model(
  "userWalletStatus",
  userWalletSchema
);
