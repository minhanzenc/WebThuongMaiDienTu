const {image} = require('../models/image-model');

const getAll = ()=>{
    return image.find();
}
const create = (body)=>{
    return image.create(body);
};

module.exports = {
    getAll,
    create
}