import Express from "express"
import { newfunction } from "../controllers/FunctionCr.js";

const route = Express.Router();
route.post("/function",newfunction);


export default route;