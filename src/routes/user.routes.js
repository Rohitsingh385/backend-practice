import { Router } from "express";
import { resgiterUser } from "../controllers/user.controller";

const router = Router();

router.route("/register").post(resgiterUser)

export default router