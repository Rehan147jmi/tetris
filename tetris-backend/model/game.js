// Tetris Game - score and Level
import mongoose from "mongoose";
const GameSchema = new mongoose.Schema({
    Address:{
      type:String
    },
    TotalScore:{
      type:Number
    },
    Level:{
      type:Number
    }
  },{timestamps:true});
  export const GameData = mongoose.model('GameData',GameSchema);
