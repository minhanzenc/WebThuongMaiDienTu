const productImageRepo = require('../repositories/product-image-repo')

const getAll = () => productImageRepo.getAll();

const create = (body) =>{
    return productImageRepo.create(body);
}

module.exports = {getAll, create}