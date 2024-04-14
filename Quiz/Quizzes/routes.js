import * as dao from "./dao.js";

export default function QuizzesRoute(app) {


    const createDetail = async (req, res) => {
        const quizDetail = await dao.createQuizDetail(req.body);
        res.json(quizDetail);
    } 

    const getDetail = async (req, res) => {
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

    
    app.get("/api/quiz/all", async (req, res) => {
        const result = await dao.getAllDetails();
        res.json(result);
    })

    app.post("/api/quiz", createDetail);
    app.get("/api/quiz/detail/:qId", getDetail);
    app.put("/api/quiz/update/:qId", updateDetail);
}