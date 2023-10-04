const { default: mongoose } = require('mongoose');
const { abstractSchema } = require('./abstract-model');

const categorySchema = new mongoose.Schema({
    ...abstractSchema,
    name: {
        type: String,
        required: 'Vui lòng nhập tên danh mục',
    },
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image'
    },
    cateGroupId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoryGroup'
    }],
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]
})

const category = mongoose.model('category', categorySchema);
module.exports =  {category} 