const productClassifyDetailRepo = require("../repositories/product-classify-detail-repo")

const getAll = () => productClassifyDetailRepo.getAll();

const create = (body) =>{
    return productClassifyDetailRepo.create(body);
}

module.exports = {getAll,create}