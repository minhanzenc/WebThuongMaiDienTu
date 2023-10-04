const {Router, json}=require('express')
const route=Router({mergeParams:true})
const productServ = require("../services/product-serv")

route.get('/',async(req,res)=>{
    try {
        const product = await productServ.getAll()
        res.status(200).json({data: product})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
route.post('/',async (req,res)=>{
    try {
        const data = req.body
        const product = await productServ.create(data)
        res.status(200).json({data: product})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
route.put('/',(req,res)=>{
    res.status(200).json({message:"Cap nhat san pham"})
})
route.delete('/',(req,res)=>{
    res.status(200).json({message:"Xoa san pham"})
})
module.exports = {route}