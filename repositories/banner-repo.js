const {banner} =require("../models/banner-model");

const getAll = ()=>{
    return banner.find();
}
const create = (body)=>{
    return banner.create(body);
}

module.exports = {getAll, create};