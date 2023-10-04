const {Router} = require('express')
const route = Router({mergeParams:true})
const productImageServ = require("../services/product-image-serv")

route.get('/', async (req, res, next) => {
    try {
        const productImage = await productImageServ.getAll()
        res.status(200).json({data:productImage})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});
route.post('/', async (req, res, next) => {
    try {
        const data = req.body;
        const productImage = await productImageServ.create(data);
        res.status(200).json({data:productImage})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = {route};