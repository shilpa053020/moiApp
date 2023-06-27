import userlogin from "../Schema/login.js"

export const newuser = async (req,res)=>{
    const newlog = new userlogin({
        User_Id:req.body.User_Id,
        Name:req.body.Name,
        PassWord:req.body.PassWord
    })
    

    await newlog.save();
    console.log("created new user");
    res.status(200).json(newlog)

}

export const getall = async(req,res)=>{
    const alluser = await userlogin.find();
     console.log("created");
     res.status(200).json(alluser)
}