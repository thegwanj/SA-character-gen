import { gql } from '@apollo/client';

export const QUERY_SHEETS = gql`
    query sheets {
        sheets {
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

export const QUERY_SINGLE_SHEET = gql`
    query sheet($sheetId: ID!) {
        sheet(sheetID: $sheetId) {
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