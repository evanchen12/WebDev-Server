import * as dao from "./dao.js";

export default function QuizzesRoute(app) {


    const createDetail = async (req, res) => {
        const quizDetail = await dao.createQuizDetail(req.body);
        res.json(quizDetail);
    } 

    const getDetailById = async (req, res) => {
        const {qId} = req.params;
        const quizDetail = await dao.getQuizDetail(qId);
        if (!quizDetail) {
            res.sendStatus(401);
            return;
        }
        res.json(quizDetail)
    }

    const updateDetail = async (req, res) => {
        const {qId} = req.params;
        const status = await dao.updateQuizDetail(qId, req.body);
        res.json(status)
    }

    const deleteQuizDetail =  async(req, res) => {
        const {qId} = req.params;
        const status = await dao.deleteDetails(qId);
        
        res.json(status);
    }

    const getQuizzes = async(req, res) => {
        const quizzes = await dao.getAllDetails()
        res.json(quizzes)
    }

    app.post("/api/quiz", createDetail);
    app.get("/api/quiz/:qId", getDetailById);
    app.get("/api/quiz", getQuizzes)
    app.put("/api/quiz/:qId", updateDetail);
    app.delete("/api/quiz/:qId", deleteQuizDetail)
}