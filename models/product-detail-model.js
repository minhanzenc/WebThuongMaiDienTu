const {default:mongoose}=require('mongoose');
const {abstractSchema}=require('./abstract-model')

const productDetailSchema=new mongoose.Schema({
    ...abstractSchema,
    price:{
        type: Number,
        required:"Vui lòng nhập giá tiền"
    },
    quantity:{
        type : Number,
        required:"Vui lòng nhập số lượng"
    },
    imageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"image"
    },
    productId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }]
})
const productDetail=mongoose.model('productDetail',productDetailSchema)
module.exports={productDetail}