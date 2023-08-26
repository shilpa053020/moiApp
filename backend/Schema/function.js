import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const functn = new mongoose.Schema({

   BrideGroomsandBrideName: {
      type: String,
      unique: true,
      required: true
   },
})

autoIncrement.initialize(mongoose.connection)
functn.plugin(autoIncrement.plugin, {
   model: "New Function",
   field: "function_id",
   startAt: 201,
   incrementBy: 1

})

export default mongoose.model("newfunction", functn)
