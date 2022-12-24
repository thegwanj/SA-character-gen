const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Sheet {
        _id: ID
        sheetID: Number
        playerName: String
        characterName: String
        faction: String
        subFaction: String
        rank: Number
        deedName: String
        generation: Number
        sire: String
        passion: String
        shadow: String
        health: Number
        willpower: Number
        energy: Number
        virtue: Number
        xpCost: Number
        freebiesCost: Number
        powers: [Power]
        skills: [Skill]
        lores: [lore]
        merits: [merit]
        patron: String
        notes: String
    }
    type Query {
        sheets: [Sheet]
        sheet(sheetID: ID!): Sheet
    }
    type Mutation {
        addSheet(playerName: String!, characterName: String!, faction: String!, subFaction: String!, rank: Number, deedName: String, generation: Number, sire: String, passion: String, shadow: String, health: Number, willpower: Number, energy: Number, virtue: Number, xpCost: Number, freebiesCost: Number, powers: powerSchema, skills: skillSchema, lores: loreSchema, merits: meritSchema, patron: String, notes: String): Sheet
    }
`;

module.exports = typeDefs;
