const {businessInfo} = require('../models/business-info-model')

const getAll = () =>{
    return businessInfo.find();
}
const create = (body) =>{
    return businessInfo.create(body);
}

module.exports = {
    getAll,
    create
}