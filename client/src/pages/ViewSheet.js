import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_SHEET } from "../utils/queries";

const ViewSheet = () => {
    // TODO: Create a function(s) that will query the db and get the sheet that was just made. Then, take the information in the sheet and display it on the page

    /*

    Idea: Create different functions for returning different sheet views based off of the character faction.
    Idea: Create a single function that displays a template, then additional functions are run depending on character faction.
    Idea: Use a single function that displays everything, even if not related to the character

    */

    // Template html
    return (
        <main name='sheet'>
            <div name='overview'>
                <h1>Overview</h1>
                <section>
                    <label for='playerName'>Player Name:</label>
                    <p id="playerName">Test</p>
                    <label for='characterName'>Character Name:</label>
                    <p id="characterName">Test</p>
                    <label for='factionSubFaction'>Faction/Subfaction:</label>
                    <p id="factionSubFaction">Test</p>
                    <label for='patron'>Patron:</label>
                    <p id='patron'>- None -</p>
                </section>
            </div>
            <div name='stats'>
                <h1>Stats</h1>
                <section>
                    <label for='health'>Health:</label>
                    <p id='health'>10</p>
                    <label for='willpower'>Willpower:</label>
                    <p id='willpower'>1</p>
                    <label for='energy'>Energy:</label>
                    <p id='energy'>10</p>
                    <label for='virtue'>Virtue:</label>
                    <p id='virtue'>6</p>
                </section>
            </div>
            <div name='powers'>
                <h1>Powers</h1>
                <section>
                    <p>- None -</p>
                </section>
            </div>
            <div name='notes'>
                <h1>Notes</h1>
                <section>
                    <p>- None -</p>
                </section>
            </div>
        </main>
    );
}

export default ViewSheet;