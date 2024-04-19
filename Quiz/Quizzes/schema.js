import mongoose from "mongoose";

const quizzesSchema = new mongoose.Schema({
  courseID: { type: String, required: true },
  name: { type: String, required: true },
  instruction: String,
  type: String,
  points: String,
  group: String,
  shuffle: Boolean,
  setLimit: Boolean,
  limit: Number,
  multiple: Boolean,
  showCorrect: Boolean,
  // show: {
  //   type: String,
  //   enum: ["Immediately"],
  //   default: "Immediately"},
  code: Number,
  oneAtATime: Boolean,
  webcam: Boolean,
  lock: Boolean,
  due: Date,
  availiable: Date,
  until: Date,
  publish: Boolean,
},
{ collection: "quizzes" });

export default quizzesSchema;