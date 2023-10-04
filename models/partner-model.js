const {default:mongoose}=require('mongoose')
const {abstractSchema}=require('./abstract-model')

const partnerSchema=new mongoose.Schema({
    ...abstractSchema,
    name:{
        type:String,
        required:"Vui lòng nhập tên cộng sự"
    },
    imageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"image",
    }
})
const parther = mongoose.model("parther",partnerSchema)
module.exports = {parther}