const {Router} =require("express")
const route = Router({mergeParams:true})
const productDetailBatchServ = require('../services/product-detail-batch-serv')

route.get('/', async(req,res)=>{
    try {
        const productClassifyDetail = await productDetailBatchServ.getAll();

        res.status(200).json({data:productClassifyDetail});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})
route.post('/', async (req, res) => {
    try {
        const data = req.body
        const productClassifyDetail = await productDetailBatchServ.create(data);
        res.status(200).json({data:productClassifyDetail});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = {route}