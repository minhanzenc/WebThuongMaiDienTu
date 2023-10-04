const { category } = require("../models/category-model")

const getAll = () => {
   return category.find({})
};

const getById = (id) => {
   return category.findById(id)
};

const create = (body) => {
   return category.create(body)
};

module.exports = { getAll, getById, create }
