import userlogin from "../Schema/login.js"

export const newuser = async (req,res)=>{
    const newlogin = new userlogin({
        User_Id:req.body.User_Id,
        Name:req.body.Name,
        PassWord:req.body.PassWord
    })
    await newlogin.save();
    console.log("created new user");
    res.status(200).json(newlogin)
}