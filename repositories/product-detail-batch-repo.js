const {productDetailBatch} =require("../models/product-detail-batch-model")

const getAll = ()=> productDetailBatch.find();

const create = (body) =>{
    return productDetailBatch.create(body);
}

module.exports ={getAll,create}