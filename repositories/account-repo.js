const { account } = require("../models/account-model")

const getAll = () => account.find();

const create = (body) => {
    return account.create(body)
};
const getByEmail = (value) => {
    return account.findOne({ email: value });
}
const update = (body) => {
    return account.findOneAndUpdate({ _id: body._id }, body, { new: true });
}
const deleteOne = (body) => {
    return account.findOneAndDelete({ _id: body._id });
};


module.exports = { getAll, create, getByEmail }