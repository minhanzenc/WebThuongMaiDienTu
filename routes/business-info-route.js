const {Router} =require('express');
const route = Router({mergeParams: true});
const businessInfoServ =  require('../services/business-info-serv')

route.get('/', async (req, res)=>{
    const businessInfo = await businessInfoServ.getAll()
    res.status(200).json({data:businessInfo})
})
route.post('/', async (req, res)=>{
    const data =req.body;
    console.log(data);
    const businessInfo = await businessInfoServ.create(data);
    res.status(200).json({data:businessInfo})
});

module.exports= {route}