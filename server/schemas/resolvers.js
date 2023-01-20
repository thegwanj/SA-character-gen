const { Sheet, Lore, Merit, Power, Skill } = require('../models');

const resolvers = {
  Query: {
    sheets: async () => {
      return Sheet.find().populate('skills').populate('lores').populate('merits').populate('powers');
    },
    sheet: async (parent, { sheetID }) => {
      return Sheet.findOne({ sheetID });
    }
  },

  Mutation: {
    // TODO: Add in Breed, Auspice, and Tribe
    // Mutations for creating and deleting sheets
    addSheet: async (parent, {playerName, characterName, faction, subFaction, rank, deedName, generation, sire, passion, shadow, health, willpower, energy, virtue, xpCost, freebiesCost, powers, skills, lores, merits, patron, notes}) => {
      const sheet = await Sheet.create({playerName, characterName, faction, subFaction, rank, deedName, generation, sire, passion, shadow, health, willpower, energy, virtue, xpCost, freebiesCost, powers, skills, lores, merits, patron, notes});

      return sheet;
    },
    removeSheet: async (parent, {sheetID}) => {
      await Sheet.findOneAndDelete({
        sheetID,
      });
    },

    // Mutations for adding/removing powers, skills, lores, and merits
    addLore: async (parent, {loreName, sheetID}) => {
      const lore = await Lore.create({
        loreName
      });

      await Sheet.findOneAndUpdate(
        { sheetID },
        { $addToSet: { lores: lore._id }}
      );

      return lore;
    },
    addMerit: async (parent, {meritName, sheetID}) => {
      const merit = await Merit.create({
        meritName
      });

      await Sheet.findOneAndUpdate(
        { sheetID },
        { $addToSet: { merits: merit._id}}
      );

      return merit;
    },
    addPower: async (parent, {treeName, treeLevel, sheetID}) => {
      const power = await Power.create({
        treeName,
        treeLevel
      });

      await Sheet.findOneAndUpdate(
        { sheetID },
        { $addToSet: { powers: power._id}}
      );

      return power;
    },
    addSkill: async (parent, {skillName, level, sheetID}) => {
      const skill = await Skill.create({
        skillName,
        level
      });

      await Sheet.findOneAndUpdate(
        { sheetID },
        { $addToSet: { skills: skill._id }}
      );

      return skill;
    },
  },
};

module.exports = resolvers;