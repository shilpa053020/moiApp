import express from "express"
import { newuser } from "../controllers/userloginCr.js";




const route = express.Router();


route.post("/create", newuser);

export default route;

