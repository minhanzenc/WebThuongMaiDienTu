const productDetailRepo = require("../repositories/product-detail-repo")

const getAll = ()=> productDetailRepo.getAll()

const create = (body)=> {
    return productDetailRepo.create(body)
}

module.exports ={getAll, create}