const { Sheet } = require('../models');

const resolvers = {
  Query: {
    sheets: async () => {
      return Sheet.find();
    },
    sheet: async (parent, { sheetID }) => {
      return Sheet.findOne({ sheetID });
    }
  },

  Mutation: {
    // Mutations for creating and deleting sheets
    addSheet: async (parent, {playerName, characterName, faction, subFaction, rank, deedName, generation, sire, passion, shadow, health, willpower, energy, virtue, xpCost, freebiesCost, powers, skills, lores, merits, patron, notes}) => {
      const sheet = await Sheet.create({playerName, characterName, faction, subFaction, rank, deedName, generation, sire, passion, shadow, health, willpower, energy, virtue, xpCost, freebiesCost, powers, skills, lores, merits, patron, notes});

      return sheet;
    },
    removeSheet: async (parent, {sheetID}) => {
      await Sheet.findOneAndDelete({
        sheetID: sheetID,
      });
    },
  },
};

module.exports = resolvers;