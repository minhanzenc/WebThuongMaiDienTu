const {productClassifyDetail} = require("../models/product-classify-detail-model")

const getAll = ()=> productClassifyDetail.find();

const create = (body) => {
    return productClassifyDetail.create(body)
};

module.exports = {getAll,create}