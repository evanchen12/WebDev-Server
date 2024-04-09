import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import quizzesRoutes from "./Quiz/Quizzes/routes.js";
import choiceQsRoutes from "./Quiz/ChoiceQs/routes.js";
import optionsRoutes from "./Quiz/Options/optionRoute.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRIN
const app = express();
mongoose.connect(CONNECTION_STRING);

app.use(cors());
app.use(express.json());
quizzesRoutes(app);
optionsRoutes(app);
choiceQsRoutes(app);

app.listen(process.env.PORT || 4000);