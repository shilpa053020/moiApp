import event from "../Schema/function.js"


export const eventnew = async (req,res)=>{
      const even = new event ({
            Function_Id:req.body.Function_Id,
           
            BrideGroomsandBrideName:req.body.BrideGroomsandBrideName,
      })
      await even.save();
      res.status(200).json(even)
      console.log("new function created")
}

export const getevent = async(req,res)=>{
      const getall = await event.find();
      res.status(200).json(getall)
      console.log("all event");
}