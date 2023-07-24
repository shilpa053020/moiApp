import userlogin from "../Schema/login.js"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"


 
export const newuser = async (req,res)=>{
    try{
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(req.body.passWord, salt);
        const newlog = new userlogin({

            User_Id:req.body.User_Id,
            Name:req.body.Name,
            PassWord:req.body.PassWord
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

// export const login =  async(req,res,next)=>{
//     try{
//      const user = await userlogin.findOne({ Name:req.body.Name,})
//         if (!user) return next(createError(404, "user not found!"));
//     const isPasswordCorrect = await bcrypt.compare(
//             req.body.passWord,
//             user.PassWord  
//     );
    
//     if(!isPasswordCorrect) return next(createError(404,"password wrong"))
    
//     const token = jwt.sign(
//         { id: user._id, isuser: user.isuser },
//          process.env.JWT
        
//     )
   
//     const { passWord, isuser, ...otherDetails } = userlogin._doc;
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json("userloign successfully");
//     }catch(err) {
//     next(err);
//     }
// }   


