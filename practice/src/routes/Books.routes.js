import { Router } from "express";
import { addBook } from "../controllers/Books.controller.js";

const router = Router()

router.route("/add").post(addBook)

export default router