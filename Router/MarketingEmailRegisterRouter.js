import express from "express"
import { MarketingEmailRegister } from "../controllers/MarketingEmailRegister.js"

const router = express.Router();

router.post('/MarketingEmailRegister',MarketingEmailRegister)

export default router