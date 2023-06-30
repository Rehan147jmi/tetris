   
   import { UserMintData } from "../model/Mint.js";


   export const saveMintData = async (req,res) => {
       console.log(req.body);
        try {
          const newUserMintData = new UserMintData(req.body);
          await newUserMintData.save();
          return res.status(200).json("Mint Data saved successfuly")
        }
        catch (error) {
         return res.status(500).json(error.messsage);
        }
       }
   
   
