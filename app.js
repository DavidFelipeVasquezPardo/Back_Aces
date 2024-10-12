import express from "express"
import cors from "cors"

import { MarketingEmailRegisterRute } from "./Router/Routes.js"

const app = express();

app.use(cors());
app.use(express.json())
app.use('/apiAces',MarketingEmailRegisterRute);

export default app;