const imageRepo = require('../repositories/image-repo')

const getAll = ()=>{
    return imageRepo.getAll()
}
const create = (body)=>{
    return imageRepo.create(body)
}

module.exports = {
    getAll,
    create
}