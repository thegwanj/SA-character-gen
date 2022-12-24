const { Schema, model, Types } = require('mongoose');

// Schema for a power tree, not individual power
const powerSchema = new Schema({
    treeId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    treeName: {
        type: String,
        required: true,
    },
    treeLevel: {
        type: Number,
        required: true,
        default: 0,
    },
});

module.exports = powerSchema;
