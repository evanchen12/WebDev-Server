import mongoose from "mongoose";
import quizzesSchema from "./schema.js";

const model = mongoose.model("QuizzesModel", quizzesSchema);

export default model;