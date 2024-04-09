import model from "./model.js";

export const createChoiceQ = (choiceQ) => model.create(choiceQ);
export const findAllChoiceQs = () => model.find();
export const findChoiceQById = (id) => model.findById(id);
export const updateChoiceQ = (id, choiceQ) => model.updateOne({_id: id}, {$set: choiceQ});
export const deleteChoiceQ = (id) => model.deleteOne({_id: id})