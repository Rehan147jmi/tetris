import { MintStatus } from "../model/MintStatus.js";

export const returnMintStatus = async (req, res) => {
  try {
    const mintStatus = await MintStatus.findOne({ id: "1" });
    return res.status(200).json(mintStatus);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
