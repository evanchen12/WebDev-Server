import mongoose from "mongoose";

const choiceQsSchema = new mongoose.Schema({
  quiz_id: {type: String, required: true},
  o_id: String,
  title: String,
  type: {
    type: String,
    enum: ["MC", "BLANK", "TF"],
    default: "MC"
  },
  question: String,
  answer: Boolean,
  points: Number,
},
{ collection: "choiceQs" });

export default choiceQsSchema;