import express from "express"
import { getall, newuser, login } from "../controllers/userLoginCr.js";
import { eventnew, getevent } from "../controllers/functionCr.js";
import { createfunction, getfunction, moi} from "../controllers/PayMoidetailsCr.js";

const route = express.Router();
//sign in page route
route.post("/create", newuser);
route.get("/getall", getall)
route.post("/login", login)

//function page route
route.post("/newfunction", eventnew)
route.get("/allevent", getevent)

//details of the user route
route.post("/createfun", createfunction);
route.get("/getfun", getfunction);
route.get("/getallmoi/:id", moi)

export default route;