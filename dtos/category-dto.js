const validator = require('validator')
const myValidator = require('../validator/validator')

const createCategoryDTO = (reqBody) => {
    const { name } = reqBody;
    const errMessages = [];

    if (!myValidator.validateString(name)) {
        errMessages.push('trường "name" không hợp lệ');
    }

    if (errMessages.length > 0) {
        return { errMessage: errMessages.reduce((total, err) => `${total} ${err} ---`, "") }
    }

    return { name }
}

module.exports = { createCategoryDTO };