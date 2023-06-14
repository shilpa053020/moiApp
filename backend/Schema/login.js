import mongoose from "mongoose";

const userlogin = new mongoose.Schema({
    User_Id:{
        type:Number,
        required:true
    },
    Name:{
        type:"string",
        required:true
    },
    PassWord:{
        type:"string",
        required:true
    },
    
})

export default mongoose.model("loginschema",userlogin);