import { Router } from "express";
import { signup } from "./controller/signup.controller.js";
import {upload} from './multer.js'
const router = Router();
console.log("in router")
router.route('/register').post(
  upload.fields([
    {
      name:"photo",
      maxCount: 1
    }
  ]),
  signup);

export default router;