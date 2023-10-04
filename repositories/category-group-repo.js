const {categoryGroup} = require('../models/category-group')

const getAll = () =>{
    return categoryGroup.find()
}
const create = (body)=>{
    return categoryGroup.create(body)
}
module.exports = {getAll,create}