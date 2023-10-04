const categoryGroupRepo = require('../repositories/category-group-repo');

const getAll = () =>{
    return categoryGroupRepo.getAll();
}
const create = (body) =>{
    return categoryGroupRepo.create(body);
}
module.exports = {getAll,create}