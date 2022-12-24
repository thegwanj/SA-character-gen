const { Schema, Types } = require('mongoose');

const loreSchema = new Schema({
    loreId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    loreName: {
        type: String,
        required: true,
    },
});

module.exports = loreSchema;