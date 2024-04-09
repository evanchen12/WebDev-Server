import mongoose from "mongoose";
import choiceQsSchema from "./schema.js";

const model = mongoose.model("ChoiceQsModel", choiceQsSchema);

export default model;
