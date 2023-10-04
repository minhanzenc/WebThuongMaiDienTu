const {default:mongoose}=require('mongoose');
const {abstractSchema}=require('./abstract-model');
const imageEnums=require('../enums/image-enums')

const imageSchema=new mongoose.Schema({
    ...abstractSchema,
    name: {
        type:String,
        required:"Vui lòng nhập tên hình"
    },
    path:{
        type:String,
        required:"Vui lòng nhập đường dẫn"
    },
    type:{
        type:String,
        enum:imageEnums,
    }
})
const image=mongoose.model('image',imageSchema)
module.exports={image}