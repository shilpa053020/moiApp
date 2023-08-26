import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"

const user = new mongoose.Schema({
    function_id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Mobilenumber: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Moipayment: {
        type: Number,
        required: true
    }
})

autoIncrement.initialize(mongoose.connection)
user.plugin(autoIncrement.plugin, {
    model: "User Details",
    field: "_id",
    startAt: 501,
    incrementBy: 1
})

export default mongoose.model("User Details", user)