const {default:mongoose}=require('mongoose')
const {abstractSchema}=require('./abstract-model')

const productDetailBatchSchema = new mongoose.Schema({
    ...abstractSchema,
    productDetailId:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"productDetailId"
    },
    quantity:{
        type:Number,
        required:"Vui lòng nhập số lượng"
    },
    importedDate:{
        type:Date,
        required:"Vui lòng nhập ngày nhập hàng"
    }
})
const  productDetailBatch=mongoose.model('productDetailBatch',productDetailBatchSchema)
module.exports={productDetailBatch}