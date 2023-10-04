const { default: mongoose } = require('mongoose');
const {abstractSchema}=require('./abstract-model');

const productSchema = new mongoose.Schema({
    ...abstractSchema,
    name:{
        type:String,
        required:"Vui lòng nhập tên sản phẩm"
    },
    slug:{
        type:String,
    },
    categoryId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    }],
    partnerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'partner'
    },
    description:{
        type:String,
    }
})
const product=mongoose.model('product',productSchema);
module.exports={product}