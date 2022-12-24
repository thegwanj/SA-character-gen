const { Schema, Types } = require('mongoose');

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

module.exports = meritSchema;