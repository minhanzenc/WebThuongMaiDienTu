const {default:mongoose}=require('mongoose')
const {abstractSchema}=require('./abstract-model')

const categoryGroupSchema = new mongoose.Schema({
    ...abstractSchema,
    name:{
        type:String,
        required:"Vui lòng không để trống trường này"
    },
    imageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"image"
    },
})
const categoryGroup=mongoose.model('categoryGroup',categoryGroupSchema)
module.exports={categoryGroup}