const {productDetail} = require("../models/product-detail-model")

const getAll = () => productDetail.find();

const create = (body) => {
    return productDetail.create(body);
}

module.exports = {getAll, create}