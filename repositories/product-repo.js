const {product}= require("../models/product-model")

const getAll = ()=> product.find();

const create = (body)=> {
    return product.create(body);
}

module.exports ={getAll,create}