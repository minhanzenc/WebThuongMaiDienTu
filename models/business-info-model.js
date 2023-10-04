const {default:mongoose}=require('mongoose');
const {abstractSchema}=require('./abstract-model')

const businessInfoSchema = new mongoose.Schema({
    ...abstractSchema,
    logo:{
        type:String,
        required:"Vui lòng nhập logo"
    },
    icon:{
        type:String,
        required:"Vui lòng chọn icon"
    },
    email:{
        type:String,
        required:"Vui lòng nhập Email"
    },
    phone:{
        type:String,
        required:"Vui lòng nhập số điện thoại"
    },
    shopee:{
        type:String,
        required:"Vui lòng nhập tên shopee"
    },
    instagram:{
        type:String,
        required:"Vui lòng nhập tên ins"
    },
    facebook:{
        type:String,
        required:"Vui lòng nhập tên fb"
    },
    imageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"image",
    }
})
const businessInfo=mongoose.model('businessInfo',businessInfoSchema)
module.exports={businessInfo};