const businessInfoRepo= require('../repositories/business-info-repo')

const getAll = () =>{
    return businessInfoRepo.getAll();
}
const create = (body) =>{
    return businessInfoRepo.create(body);
}

module.exports = {
    getAll,
    create
}