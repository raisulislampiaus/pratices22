const mongoose = require('mongoose');

const ColorcategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
})


ColorcategorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

ColorcategorySchema.set('toJSON', {
    virtuals: true,
});

exports.CalorCategory = mongoose.model('colorCategory', ColorcategorySchema);