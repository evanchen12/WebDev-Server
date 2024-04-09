import mongoose from "mongoose";
import ChoiceQsSchema from "./schema.js";

const model = mongoose.model("OptionsModel", ChoiceQsSchema);

export default model;