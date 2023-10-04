const {parther} =require("../models/partner-model")

const getAll = ()=>{
    return parther.find();
}
const create = (body)=>{
    return parther.create(body);
}

module.exports = {
    getAll,
    create
}