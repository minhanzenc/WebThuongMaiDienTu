const productRepo = require("../repositories/product-repo")

const getAll = ()=> productRepo.getAll();

const create = (body)=>{ 
    return productRepo.create(body);
};

module.exports = {getAll, create}