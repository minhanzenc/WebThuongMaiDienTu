const partherRepo = require('../repositories/parther-repo');

const getAll = ()=>{
    return partherRepo.getAll()
}
const create = (body)=>{
    return partherRepo.create(body)
}

module.exports = {
    getAll,
    create
}