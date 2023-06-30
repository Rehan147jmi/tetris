// Mint data from user
import mongoose from "mongoose";
const MintSchema = new mongoose.Schema({
      
    Address:{
      type:String
    },
    Inscription_URL:{
      type:String
    }

  },{timestamps:true});


  export const UserMintData = mongoose.model('MintData',MintSchema);
