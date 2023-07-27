import express from "express"
import { getall, newuser ,login} from "../controllers/userLoginCr.js";


const route = express.Router();

 
route.post("/create", newuser);

route.get("/getall",getall)

route.post("/login",login)

export default route;

