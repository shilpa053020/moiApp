import express from "express"
import { getall, newuser } from "../controllers/userLoginCr.js";

const route = express.Router();


route.post("/create", newuser);

route.get("/getall",getall)

export default route;

