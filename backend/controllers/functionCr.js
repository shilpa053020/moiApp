import fun from  "../Schema/function.js" 
export const newfunction = async(req,res)=>{
     const newfun = new fun({
           Function_Id:req.body.Function_Id,
           FunctionName:req.body.FunctionName
     })
     await newfun.save();
     console.log("created new function");
     res.status(200).json(newfun)
}