import * as dao from "./dao.js";

export default function OptionsRoutes(app) {
    const createOption = async (req, res) => {
      const option = await dao.createOption(req.body);
      res.json(option);
    };
  
    const findAllOptions = async (req, res) => {
      const option = await dao.findAllOptions();
      res.json(option);
    }
  
    const updateOptions = async (req, res) => {
      const {id} = req.params;
      const status = await dao.updateOption(id, req.body);
      res.json(status);
    };
  
    const deleteOptions = async (req, res) => {
      const status = await dao.deleteOption(req.params.id);
      res.json(status);
    };
  
  
    app.post("/api/options", createOption);
    app.get("/api/options", findAllOptions);
    app.put("/api/options/:id", updateOptions);
    app.delete("/api/options/:id", deleteOptions);
  }