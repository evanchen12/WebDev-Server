import model from "./model.js";

export const createOption = (option) => model.create(option);
export const findAllOptions = (p_id) => model.find({p_id});
export const updateOption = (id, option) => model.updateOne({_id: id}, {$set: option});
export const deleteOption = (id) => model.deleteOne({_id: id})