const productDetailBatchRepo = require("../repositories/product-detail-batch-repo");

const getAll = ()=> productDetailBatchRepo.getAll();

const create = (body) =>{
    return productDetailBatchRepo.create(body);
}

module.exports = {getAll,create};