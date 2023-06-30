import { userWalletStatus } from "../model/userWalletStatus.js";
import { returnConstant } from "../constants/constant.js";

export const returnCoinbaseURL = async (req, res) => {
  
  try {
    const userStatus = await userWalletStatus.findOne({
      walletAddress: req.body.walletAddress
    });
    console.log(userStatus);
    if (userStatus.walletStatus === "WHITELIST") {
      return res.status(200).json(returnConstant("Whitelist_Pay_URL"));
    } else {
      return res.status(200).json(returnConstant("Public_Pay_URL"));
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
