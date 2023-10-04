const {Router} = require('express');
const route = Router({mergeParams : true});
const categoryGroupServ = require('../services/category-group-serv')

route.get('/', async(req,res)=>{
    try {
        const categoryGroup = await categoryGroupServ.getAll();
        res.status(200).json({data: categoryGroup});
    } catch (error) {
        res.status(500).json({error: error});
    }
})

route.post('/', async(req,res)=>{
    try {
        const data = req.body;
        const createCategoryGroup = await categoryGroupServ.create(data); 
        res.status(200).json({data: createCategoryGroup});
    } catch (error) {
        res.status(500).json({error: error});
    }
});
module.exports = {route};