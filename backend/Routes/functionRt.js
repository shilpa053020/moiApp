import  express from "express";
import { eventnew, getevent } from "../controllers/functionCr.js";

const route = express.Router();


route.post("/newfunction",eventnew)

route.get("/allevent" , getevent)


export default route;