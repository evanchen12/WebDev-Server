import mongoose from "mongoose";
import ChoiceQsSchema from "./schema.js";

const model = mongoose.model("ChoiceQsModel", ChoiceQsSchema);

export default model;