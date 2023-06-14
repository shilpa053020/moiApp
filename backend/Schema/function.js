import mongoose from "mongoose";

const functn = new mongoose.Schema({
    
      Function_Id:{
         type:Number,
         required:true
      },
      FunctionName:{
          type:String,
          required:true
      }

})
export default mongoose.model("newfunction",functn);
