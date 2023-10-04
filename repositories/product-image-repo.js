const {productImage} =require("../models/product-image");

const getAll = () => productImage.find();

const create = (body) => productImage.create(body);

module.exports = {
    getAll,
    create
}
