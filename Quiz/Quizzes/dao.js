import model from "./model.js";

export const createQuizDetail = (quizDetail) => { 
    delete quizDetail._id;
    return model.create(quizDetail);
}

export const getQuizDetail = (quizId) => model.findById(quizId)

export const updateQuizDetail = (quizId, quizDetail) => model.updateOne({_id: quizId}, {$set: quizDetail})

export const getAllDetails = () => model.find();