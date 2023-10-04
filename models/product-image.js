const {default:mongoose} = require('mongoose')
const {abstractSchema} = require('./abstract-model')

const productImageSchema=new mongoose.Schema({
    ...abstractSchema,
    imageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"image"
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
})
const productImage=mongoose.model('productImage',productImageSchema)
module.exports={productImage}