import userlogin from "../Schema/login.js"
 import bcrypt from "bcryptjs"



 
export const newuser = async (req,res)=>{
    try{
         const salt = bcrypt.genSaltSync(10);
         const hash = bcrypt.hashSync(req.body.PassWord, salt);
         const newlog = new userlogin({

            User_Id:req.body.User_Id,
            Name:req.body.Name,
            PassWord:hash
        })
        

        await newlog.save();
        console.log("created new user");
        res.status(200).send("new user created successfully")
        }catch(err){
      
        }

}

export const getall = async(req,res)=>{
    const alluser = await userlogin.find();
     console.log("created");
     res.status(200).json(alluser)
}
 


export const login =  async(req,res)=>{
    try{
     const user = await userlogin.findOne({ Name:req.body.Name})
     if (!user) return res.send(false)
    const isPasswordCorrect = await bcrypt.compare(
            req.body.PassWord,
            user.PassWord  
    );
    
     if(!isPasswordCorrect) return res.send(false)
    return res.send(true)
    
     }catch(err) {
      res.send(err);
     }
}   
 


