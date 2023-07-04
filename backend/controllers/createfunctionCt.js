import create from "../Schema/createfunction.js";


export const createfunction = async(req,res)=>{
    const crtfun = new create({
        
        Name:req.body.Name,
        Mobilenumber:req.body.Mobilenumber,
        Address:req.body.Address,
        Moipayment:req.body.Moipayment

    })
    await crtfun.save();
    console.log("created new function");
    res.status(200).json(crtfun)
   
   

 
}

export const getfunction = async(req,res)=>{
        const getAll = await create.find();                                                                                                                                                                                                                                                                                                    
        res.status(200).json(getAll) 
        console.log("get the details") 

}

export default create;