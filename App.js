import express from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import QuizzesRoutes from "./Quiz/Quizzes/routes.js";
import ChoiceQsRoutes from "./Quiz/ChoiceQs/routes.js";
import OptionsRoutes from "./Quiz/Options/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/quiz";
const app = express();
mongoose.connect(CONNECTION_STRING);

app.use(cors());
app.use(express.json());

QuizzesRoutes(app);
ChoiceQsRoutes(app);
OptionsRoutes(app);

app.listen(process.env.PORT || 4000);
