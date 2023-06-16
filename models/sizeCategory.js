const mongoose = require('mongoose');

const SizecategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
})


SizecategorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

SizecategorySchema.set('toJSON', {
    virtuals: true,
});

exports.SizeCategory = mongoose.model('sizeCategory', SizecategorySchema);