import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const DBConnection = async () => {
    const URL = process.env.DB_URL
        try{
      await  mongoose.connect(URL,{useUnifiedTopology:true});
      console.log("Database connected successfully");
    }
    catch(error) {
        console.log("Error connecting to database",error.message)
    }
}
export default DBConnection;
