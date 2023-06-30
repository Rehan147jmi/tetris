import mongoose from "mongoose";


const MintStatusSchema = new mongoose.Schema({
      id:{
      type:String
      },
      status:{
        type:String
      }

})


 export const MintStatus = mongoose.model("MintStatus",MintStatusSchema);

 

