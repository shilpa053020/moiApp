import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userlogin = new mongoose.Schema({

    Name: {
        type: String,
        required: true,
        unique: true,
    },
    PassWord: {
        type: String,
        required: true
    }
})

autoIncrement.initialize(mongoose.connection);
userlogin.plugin(autoIncrement.plugin, {
    model: "Userlogin",
    field: "_id",
    startAt: 101,
    incrementBy: 1,
})

export default mongoose.model("loginschema", userlogin);