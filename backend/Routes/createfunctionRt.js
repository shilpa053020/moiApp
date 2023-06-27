import Express from "express"
import { createfunction,getfunction } from "../controllers/createfunctionCt.js";


const route = Express.Router();
route.post("/createfun",createfunction);
route.get("/getfun",getfunction);


export default route;