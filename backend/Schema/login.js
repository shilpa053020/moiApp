import mongoose from "mongoose";


const userlogin = new mongoose.Schema({
    User_Id:{
        type:Number
    },
    Name:{
        type:String,
        required:true
    },
    PassWord:{
        type:String,
        required:true
    }
    
})



export default mongoose.model("loginschema",userlogin);