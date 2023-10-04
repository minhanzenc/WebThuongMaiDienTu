const validator = require("validator")
const myValidator = require("../validator/validator");

const createAccountDTO = (reqBody) =>{
    const errMessage = [];
    const {email, password, role} = reqBody;
    if(!validator.isEmail(email)){
        errMessage.push('Email không hợp lệ');
    }
    if(!validator.isLength(password,{min:6})){
        errMessage.push('Password phải từ 6 ký tự');
    }
    if(!myValidator.validateString(role)){
        errMessage.push('Phân quyền không hợp lệ')
    }
    if(errMessage.length>0){
        return errMessage.reduce((total, err) => `${total}${err}---`, "")
    }
    return {email, password, role};
}

const loginPayloadDTO = (reqBody)=>{
    const errMessage = [];
    const {email, password} = reqBody;
    if(!validator.isEmail(email)){
        errMessage.push('Email không hợp lệ');
    }
    if(!validator.isLength(password,{min:6})){
        errMessage.push('Password phải từ 6 ký tự');
    }
    if(errMessage.length>0){
        return errMessage.reduce((total, err) => `${total}${err}---`, "")
    }
    return {email, password};
}

module.exports = {createAccountDTO,loginPayloadDTO};