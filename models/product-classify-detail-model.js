const { default: mongoose}=require('mongoose')
const {abstractSchema}=require('./abstract-model')

const productClassifyDetailSchema = new mongoose.Schema({
    ...abstractSchema,
    productClassifyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"productClassifyId"
    },
    productDetailId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"productDetailId"
    },
    name:{
        type: String,
        required:"Vui lòng nhập tên chi tiết phân loại"
    }
})
const productClassifyDetail=mongoose.model('productClassifyDetail',productClassifyDetailSchema)
module.exports={productClassifyDetail}
