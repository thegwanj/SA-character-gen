const { Schema, Types, model } = require('mongoose');

const meritSchema = new Schema({
    meritId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    meritName: {
        type: String,
        required: true,
    },
});

const Merit = model('Merit', meritSchema)

module.exports = Merit;