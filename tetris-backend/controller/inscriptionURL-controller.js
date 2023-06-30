 import { returnConstant } from "../constants/constant.js";
 
 // Tetris Functions
 
 export const returnWLinscriptionURL = async  (req,res) => {
  try {
    return res.status(200).json(returnConstant("WLChecker_inscription_URL"));
  } catch (error) {
    return res.status(500).json(error.message);
  }
 }
 
 // LOOT Functions
 
 export const returnLOOTWLinscriptionURL = async  (req,res) => {
  try {
    return res.status(200).json(returnConstant("LOOTWLChecker_inscription_URL"));
  } catch (error) {
    return res.status(500).json(error.message);
  }
 }
