const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const loreSchema = require('./Lore');
const meritSchema = require('./Merit');
const powerSchema = require('./Power');
const skillSchema = require('./Skill');

const sheetSchema = new Schema({
  // Identifier for getting/setting in the future
  sheetID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  // Top of the sheet - stuff that is always required
  playerName: {
    type: String,
    required: true,
    trim: true,
  },
  characterName: {
    type: String,
    required: true,
    trim: true,
  },
  faction: {
    type: String,
    required: true,
  },
  subFaction: {
    type: String,
    required: true,
  },

  // Specifics for Shifters
  rank: {
    type: Number,
  },
  deedName: {
    type: String,
    trim: true,
  },

  // Specifics for Vampires
  generation: {
    type: Number,
  },
  sire: {
    type: String,
    trim: true,
  },

  // Specifics for Wraith
  passion: {
    type: String,
    trim: true,
  },
  shadow: {
    type: String,
    trim: true,
  },

  // Health, WP, Energy, and Virtues
  health: {
    type: Number,
    default: 10,
    required: true,
  },
  willpower: {
    type: Number,
    default: 1,
    required: true,
  },

  // Leaving no default for energy and virtue since new rules are coming up and different factions have different defaults
  energy: {
    type: Number,
    required: true,
  },
  virtue: {
    type: Number,
    required: true,
  },

  // XP + Freebies costs
  xpCost: {
    type: Number,
    required: true,
    default: 0,
  },
  freebiesCost: {
    type: Number,
    required: true,
    default: 0,
  },

  // Trees + lores and merits
  powers: [powerSchema],
  skills: [skillSchema],
  lores: [loreSchema],
  merits: [meritSchema],

  // Other stuff I missed
  patron: {
    type: String,
    trim: true,
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 1000,
  },

  // left this in because it could be cool to know when a sheet was added
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Sheet = model('Sheet', sheetSchema);

module.exports = Sheet;
