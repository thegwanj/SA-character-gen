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

`;

export const ADD_LORE = gql`

`;

export const ADD_MERIT = gql`

`;

export const ADD_POWER = gql`

`;

export const ADD_SKILL = gql`

`;