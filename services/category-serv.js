const categoryRepo = require('../repositories/category-repo');

const create = (body) => {
    return categoryRepo.create(body);
}

const getAll = () => {
    return categoryRepo.getAll();
}

module.exports = { getAll, create }