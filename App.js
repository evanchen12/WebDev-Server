import express from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import session from 'express-session';
import QuizzesRoutes from "./Quiz/Quizzes/routes.js";
import ChoiceQsRoutes from "./Quiz/ChoiceQs/routes.js";
import OptionsRoutes from "./Quiz/Options/routes.js";
import UserRoutes from './Users/routes.js';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const app = express();
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

mongoose.connect(CONNECTION_STRING);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
); 
app.use(session(sessionOptions));
app.use(express.json());

QuizzesRoutes(app);
ChoiceQsRoutes(app);
OptionsRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
