const { Router } = require("express");
const route = Router({ mergeParams: true })
const partherServ = require("../services/parther-serv")

route.get("/", async (req, res) => {
    try {
        const parther = await partherServ.getAll();
        console.log(parther)
        res.status(200).json({data: parther})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});
route.post("/", async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const parther = await partherServ.create(data);////////////////////////////////
        res.status(200).json({data: parther});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = { route };