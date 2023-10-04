const { default: mongoose} = require("mongoose");
const roleEnums = require("../enums/role-account-enums");

const accountSchema = new mongoose.Schema({
    email:{
        type: String,
        require:"trường 'email' không được để trống",
    },
    password:{
        type: String,
        require:"trường 'password' không được để trống",
    },
    role:{
        type:String,
        enum:roleEnums,
        default:roleEnums.USER
    },
});

const account = mongoose.model("account", accountSchema);
module.exports = {account};