const validator = require('validator')
const myValidator = require('../validator/validator')

const createBannerDTO = (reqBody) => {
    const { title, linkTo, priority } = reqBody;
    const errorMessage = [];
    if (!validator.isLength(title, { min: 3, max: 255 })) {
        errorMessage.push('Title phải từ 3 đến 255 ký tự');
    }
    if (!validator.isURL(linkTo)) {
        errorMessage.push('Đường dẫn không hợp lệ');
    }
    if (!validator.isNumeric(priority)) {
        errorMessage.push('Priority phải là số');
    }
    if (errorMessage.length > 0) {
        return errorMessage.reduce((total, err) => `${total}${err}---`, "")
    }
    return {title, linkTo, priority }
}

module.exports = { createBannerDTO }