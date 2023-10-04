const validator = require('validator');
const myValidator = require('../validator/validator');

const createBusinessInfoDTO = (reqBody) => {
    const { logo, icon, email, phone, shopee, instagram, facebook, } = reqBody;
    const errorMessage = [];
    if (!validator.isURL(logo)) {
        errorMessage.push('Đường dẫn "logo" không hợp lệ');
    }
    if (!validator.isURL(icon)) {
        errorMessage.push('Đường dẫn "icon" không hợp lệ');
    }
    if (!validator.isEmail(email)) {
        errorMessage.push('Email không hợp lệ');
    }
    if (!validator.isNumberic(phone)) {
        errorMessage.push('Phone không hợp lệ');
    }

}