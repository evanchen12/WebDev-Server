import * as dao from "./dao.js";

export default function ChoiceQsRoutes(app) {
  const createChoiceQ = async (req, res) => {
    const choiceQ = await dao.createChoiceQ(req.body);
    res.json(choiceQ);
  };

  const findAllChoiceQs = async (req, res) => {
    const choiceQ = await dao.findAllChoiceQs(req.params.id);
    res.json(choiceQ);
  }

  const updateChoiceQ = async (req, res) => {
    const {id} = req.params;
    const status = await dao.updateChoiceQ(id, req.body);
    res.json(status);
  };

  const deleteChoiceQ = async (req, res) => {
    const status = await dao.deleteChoiceQ(req.params.id);
    res.json(status);
  };


  app.post("/api/questions", createChoiceQ);
  app.get("/api/questions/:id", findAllChoiceQs);
  app.put("/api/questions/:id", updateChoiceQ);
  app.delete("/api/questions/:id", deleteChoiceQ);
}