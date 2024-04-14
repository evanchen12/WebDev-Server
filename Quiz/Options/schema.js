import mongoose from "mongoose";

const optionsSchema = new mongoose.Schema({
p_id: {type: String, required: true},
description: String,
answer: String,
},
{ collection: "options" });

export default optionsSchema;