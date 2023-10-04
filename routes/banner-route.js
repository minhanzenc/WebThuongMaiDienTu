const {Router} =require('express');
const route= Router({mergeParams: true});
const bannerServ= require('../services/banner-serv');
const bannerDTO = require("../dtos/banner-dto");
const {verifyToken} = require("../middlewares/verify-token")

route.get('/',async (req,res)=>{
    try {
        const banner= await bannerServ.getAll();
        res.status(200).json({data: banner});
    } catch (error) {
        res.status(500).json({message: error.message});
    }   
});
route.post('/',verifyToken,async (req,res)=>{
    try {
        const createBannerDTO =bannerDTO.createBannerDTO(req.body);
        if(createBannerDTO.errMessage){
            throw new Error(createBannerDTO.errMessage);
        }
        const banner= await bannerServ.create(createBannerDTO);
        res.status(200).json({data: banner});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
module.exports={route};