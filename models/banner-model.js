const { default: mongoose } = require('mongoose')
const { abstractSchema } = require('./abstract-model')

const bannerSchema = new mongoose.Schema({
    ...abstractSchema,
    title: {
        type: String,
        required: "Vui lòng nhập tiêu đề",
    },
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "image"
    },
    linkTo: {
        type: String,
        required: "Vui lòng nhập đường dẫn"
    },
    priority: {
        type: Number,
    }
})
const banner = mongoose.model('banner', bannerSchema)
module.exports = {banner}