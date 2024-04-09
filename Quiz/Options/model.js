import mongoose from "mongoose";
import optionsSchema from "./schema.js";

const model = mongoose.model("OptionsModel", optionsSchema);

export default model;