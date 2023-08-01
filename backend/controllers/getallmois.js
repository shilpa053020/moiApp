import create from "../Schema/PayMoidetails.js";


const moi = async(req,res)=>{
  try{
    console.log(req.params.id);
    const allmois = await create.find({function_id:req.params.id});
    return res.status(200).json(allmois)
  }
catch(err){
    return res.status(404).json(err)
}

}


export default moi;