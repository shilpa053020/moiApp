import mongoose from "mongoose";

const user = new mongoose.Schema({
    
    Name:{
        type:String,
        required:true
    },
    Mobilenumber:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Moipayment:{
        type:Number,
        required:true
    }

})


export default mongoose.model("collection",user)