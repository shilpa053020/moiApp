import express from "express"
import moi from "../controllers/getallmois.js";
const Router = express.Router();


//getAllmois 
Router.get("/getallmoi/:id",moi)



export default Router;