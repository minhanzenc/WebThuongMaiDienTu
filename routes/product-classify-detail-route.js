const {Router} = require('express');
const route = Router({mergeParams:true})
const productClassifyDetailServ = require("../services/product-classify-detail-serv")

route.get("/", async (req,res)=>{
    try {
        const productClassifyDetail = await productClassifyDetailServ.getAll()
    res.status(200).json({data:productClassifyDetail});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})
route.post('/', async (req,res)=>{
    try {
        const data=req.body;
        const productClassifyDetail = await productClassifyDetailServ.create(data);
        res.status(200).json({data:productClassifyDetail});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = {route}