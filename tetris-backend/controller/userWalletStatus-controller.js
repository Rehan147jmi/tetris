import { userWalletStatus } from "../model/userWalletStatus.js";

export const returnUserWalletStatus = async (req, res) => {
  
  try {
    const exist = await userWalletStatus.findOne({
      walletAddress: req.body.walletAddress,
    });
    if (exist) {
      const userStatus = await userWalletStatus.findOne({
        walletAddress: req.body.walletAddress,
      });
      return res.status(200).json(userStatus);
    } else {
      return res.status(500).json("Wallet Address Does not Exist");
    }
  } catch (error) {
    console.log("error at userwalletstatus");
    return res.status(500).json(error.message);
  }
};
