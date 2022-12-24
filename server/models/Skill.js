const { Schema, model, Types } = require('mongoose');

// Schema for a skill tree, not individual power
const skillSchema = new Schema({
    skillId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    skillName: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
});

const Skill = model('Skill', skillSchema)

module.exports = Skill;