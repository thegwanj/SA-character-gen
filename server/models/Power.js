const { Schema, model, Types } = require('mongoose');

// Schema for a power tree, not individual power
const powerSchema = new Schema({
    powerId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    powerName: {
        type: String,
        required: true,
    }
})

module.exports = Power;
