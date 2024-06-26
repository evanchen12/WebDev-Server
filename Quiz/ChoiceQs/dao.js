import model from "./model.js";

export const createChoiceQ = (choiceQ) => model.create(choiceQ);
export const findAllChoiceQs = (quiz_id) => model.find({quiz_id});
export const updateChoiceQ = (id, choiceQ) => model.updateOne({_id: id}, {$set: choiceQ});
export const deleteChoiceQ = (id) => model.deleteOne({_id: id})