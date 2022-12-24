const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Sheet {
        _id: ID
        playerName: String
        characterName: String
        faction: String
        subFaction: String
        rank: Int
        deedName: String
        generation: Int
        sire: String
        passion: String
        shadow: String
        health: Int
        willpower: Int
        energy: Int
        virtue: Int
        xpCost: Int
        freebiesCost: Int
        powers: [Power]
        skills: [Skill]
        lores: [Lore]
        merits: [Merit]
        patron: String
        notes: String
    }
    type Lore {
        loreId: Int
        loreName: String
    }
    type Merit {
        meritId: Int
        meritName: String
    }
    type Power {
        treeId: Int
        treeName: String
        treeLevel: Int
    }
    type Skill {
        skillId: Int
        skillName: String
        level: Int
    }
    type Query {
        sheets: [Sheet]
        sheet(sheetID: ID!): Sheet
    }
    type Mutation {
        addSheet(playerName: String!, characterName: String!, faction: String!, subFaction: String!, rank: Int, deedName: String, generation: Int, sire: String, passion: String, shadow: String, health: Int!, willpower: Int!, energy: Int!, virtue: Int!, xpCost: Int!, freebiesCost: Int!, patron: String, notes: String): Sheet
        removeSheet(sheetID: Int!): Sheet
    }
`;

module.exports = typeDefs;
