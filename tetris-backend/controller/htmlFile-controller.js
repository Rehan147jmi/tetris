import { returnHTML } from "../constants/htmlFile.js";

export const returnHTMLFile = (req, res) => {
    
  try {
    return res.status(200).json(returnHTML());
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
