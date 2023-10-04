const { Router } = require("express");
const route = Router({ mergeParams: true })
const productDetailServ = require("../services/product-detail-serv")

route.get("/", async (req, res, next) => {
    try {
        const productDetail = await productDetailServ.getAll()
        res.status(200).json({ data: productDetail })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
route.post("/", async (req, res, next) => {
    try {
        const data = req.body;
        const productDetail = await productDetailServ.create(data);
        res.status(200).json({ data: productDetail });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports ={route}