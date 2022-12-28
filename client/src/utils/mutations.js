import { gql } from '@apollo/client';

export const ADD_SHEET = gql`
    mutation addSheet($playerName: String!, $characterName: String!, $faction: String!, $subFaction: String!, $rank: Int, $deedName: String, $generation: Int, $sire: String, $passion: String, $shadow: String, $health: Int!, $willpower: Int!, $energy: Int!, $virtue: Int!, $xpCost: Int!, $freebiesCost: Int!, $patron: String, $notes: String) {
        addSheet(playerName: $playerName, characterName: $characterName, faction: $faction, subFaction: $subFaction, rank: $rank, deedName: $deedName, generation: $generation, sire: $sire, passion: $passion, shadow: $shadow, health: $health, willpower: $willpower, energy: $energy, virtue: $virtue, xpCost: $xpCost, freebiesCost: $freebiesCost) {
            _id
            playerName
            characterName
            faction
            subFaction
            rank
            deedName
            generation
            sire
            passion
            shadow
            health
            willpower
            energy
            virtue
            xpCost
            freebiesCost
            lores {
                loreName
            }
            merits {
                meritName
            }
            powers {
                treeName
                treeLevel
            }
            skills {
                skillName
                level
            }
            patron
            notes
        }
    }
`;

export const REMOVE_SHEET = gql`
    mutation removeSheet($sheetId: ID!) {
    removeSheet(sheetID: $sheetId) {
        _id
        playerName
        characterName
        faction
        subFaction
        rank
        deedName
        generation
        sire
        passion
        shadow
        health
        willpower
        energy
        virtue
        xpCost
        freebiesCost
        lores {
                loreName
            }
            merits {
                meritName
            }
            powers {
                treeName
                treeLevel
            }
            skills {
                skillName
                level
            }
        patron
        notes
    }
}
`;

export const ADD_LORE = gql`
    mutation addLore($loreName: String!, $sheetId: ID!) {
        addLore(loreName: $loreName, sheetID: $sheetId) {
            _id
            loreName
        }
    }
`;

export const ADD_MERIT = gql`
    mutation addMerit($meritName: String!, $sheetId: ID!) {
        addMerit(meritName: $meritName, sheetID: $sheetId) {
            meritId
            meritName
        }
    }
`;

export const ADD_POWER = gql`
    mutation addPower($treeName: String!, $treeLevel: Int!, $sheetId: ID!) {
        addPower(treeName: $treeName, treeLevel: $treeLevel, sheetID: $sheetId) {
            treeId
            treeName
            treeLevel
        }
    }
`;

export const ADD_SKILL = gql`
    mutation addSkill($skillName: String!, $level: Int!, $sheetId: ID!) {
        addSkill(skillName: $skillName, level: $level, sheetID: $sheetId) {
            skillId
            skillName
            level
        }
    }
`;