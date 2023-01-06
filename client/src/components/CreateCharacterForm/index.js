import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SHEET } from '../../utils/mutations';


const CreateCharacterForm = () => {
    const [playerName, setPlayerName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [faction, setFaction] = useState('');
    const [subFaction, setSubFaction] = useState('');
    const [patron, setPatron] = useState('');
    const [notes, setNotes] = useState('');
    const [rank, setRank] = useState('');
    const [deedName, setDeedName] = useState('');
    const [generation, setGeneration] = useState('');
    const [sire, setSire] = useState('');
    const [passion, setPassion] = useState('');
    const [shadow, setShadow] = useState('');

    const [addSheet, { error }] = useMutation(ADD_SHEET);
  
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const { data } = await addSheet({
                variables: {
                    playerName,
                    characterName,
                    faction,
                    subFaction,
                    rank,
                    deedName,
                    generation,
                    sire,
                    passion,
                    shadow,
                    health,
                    willpower,
                    energy,
                    virtue,
                    xpCost,
                    freebiesCost,
                    patron,
                    notes
                },
            });
        }
        catch (e){
            console.error(e);
        }

        window.location.href = "/ViewSheet";
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        // Take values and use set to change state
        switch(name){
            case "playerName":
                setPlayerName(value);
                break;
            case "characterName":
                setCharacterName(value);
                break;
            case "subFaction":
                setSubFaction(value);
                console.log(value);
                break;
            case "patron":
                setPatron(value);
                break;
            case "notes":
                setNotes(value);
                break;
            
            // Faction specific states
            case "rank":
                setRank(value);
                break;
            case "deedName":
                setDeedName(value);
                break;
            case "generation":
                setGeneration(value);
                console.log(value);
                break;
            case "sire":
                setSire(value);
                console.log(value);
                break;
            case "passion":
                setPassion(value);
                break;
            case "shadow":
                setShadow(value);
                break;
        }
    };    

    // TODO: Instead of onChange in the innerHTML, try adding event listener instead
    //       Will most likely need to change names/id to be not unique
    // Separate function to handle faction changes
    const handleFactionChange = (event) => {
        const { name, value } = event.target;

        // Take values and use set to change state
        setFaction(value);
        setSubFaction('');
        setRank('');
        setDeedName('');
        setGeneration('');
        setSire('');
        setPassion('');
        setPassion('');

        // Clear the current subfaction section/selections
        try {
            // Select the subfaction section element
            let subFactionForm = document.getElementById("subFactionForm");

            // Delete the selected element
            while(subFactionForm.firstChild){
                subFactionForm.removeChild(subFactionForm.firstChild);
            };

            // Select the faction specifics section/selections
            let factionSpecificForm = document.getElementById("factionSpecificForm");

            // Delete the selected element
            while(factionSpecificForm.firstChild){
                factionSpecificForm.removeChild(factionSpecificForm.firstChild);
            };
        }
        catch {
            console.error("No elements to clear");
        };

        // Create a new dom element that we will use to append to the forms
        let subFactionContent = document.createElement("div");

        // Add to element depending on what faction is selected (dropdown menu)
        switch(value){
            case "Human":
                console.log("Human!");

                subFactionContent.innerHTML=`
                <label for="subFactionSelection">Select a subfaction:</label>
                <select id='subFactionSelection' name='subFactionSelection' onChange={handleChange} required>
                    <option value="Ghoul">Ghoul</option>
                    <option value="Gifted Kin">Gifted Kin</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Faithful">Faithful</option>
                    <option value="Claimed">Claimed</option>
                </select>
                `;
                break;

            case "Shifter":
                console.log("Shifter!");

                subFactionContent.innerHTML=`
                
                `;
                break;

            case "Wraith":
                console.log("Wraith!");

                subFactionContent.innerHTML=`
                
                `;
                break;

            case "Vampire":
                console.log("Vampire!");

                subFactionContent.innerHTML=`
                
                `;
                break;
        }

        // Append to subfaction section element
        let subFactionForm = document.getElementById("subFactionForm");
        subFactionForm.appendChild(subFactionContent);

        // Create a new dom element that we will use to append to the forms
        let newContent = document.createElement("div");
        // Rewrite element for the faction specifics section like with subfactions (text inputs)
        switch(value){
            case "Human":
                console.log("Human!");

                newContent.innerHTML=``;
                break;

            case "Shifter":
                console.log("Shifter!");

                // Might have to make rank a dropdown instead of text
                newContent.innerHTML=`
                <label for="rank">Rank:</label>
                <input id='rank' name='rank' onChange={handleChange} required></input>
                <label for="deedName">Deed name (if applicable):</label>
                <input id='deedName' name='deedName' onChange={handleChange}></input>
                `;
                break;

            case "Wraith":
                console.log("Wraith!");

                newContent.innerHTML=`
                <label for="passion">Passion:</label>
                <input id='passion' name='passion' onChange={handleChange} required></input>
                <label for="shadow">Shadow:</label>
                <input id='shadow' name='shadow' onChange={handleChange} required></input>
                `;
                break;

            case "Vampire":
                console.log("Vampire!");

                // Might have to make generation a dropdown instead of text
                newContent.innerHTML=`
                <label for="generation">Generation:</label>
                <input id='generation' name='generation' value="" required></input>
                <label for="sire">Sire:</label>
                <input id='sire' name='sire' onChange={handleChange} required></input>
                `;
                break;
        }

        // Append to faction specifics section
        let factionSpecificForm = document.getElementById("factionSpecificForm");
        factionSpecificForm.appendChild(newContent);

        console.log(newContent);

        // Future implementation: Using the value, update the energy and virtue pools
    }

    return (
        <div class="characterForm">
            <form onSubmit={handleFormSubmit}>
                <section class="formSection">
                    <div class="question">
                        <label for="playerName">Player name:</label>
                        <input id="playerName" name='playerName' value={playerName} onChange={handleChange} type="text" required></input>
                    </div>

                    <div class="question">
                        <label for="characterName">Character name:</label>
                        <input id="characterName" name='characterName' value={characterName} onChange={handleChange} required></input>
                    </div>

                    <label for='factionForm'>Select a faction:</label>
                    <div class="question" id='factionForm'>
                        <input id="human" name='faction' type="radio" value="Human" onChange={handleFactionChange} required></input>
                        <label for="human">Human</label>
                        <input id="shifter" name='faction' type="radio" value="Shifter" onChange={handleFactionChange} required></input>
                        <label for="shifter">Shifter</label>
                        <input id="wraith" name='faction' type="radio" value="Wraith" onChange={handleFactionChange} required></input>
                        <label for="wraith">Wraith</label>
                        <input id="vampire" name='faction' type="radio" value="Vampire" onChange={handleFactionChange} required></input>
                        <label for="vampire">Vampire</label>
                    </div>

                    <div class="question" id='subFactionForm'>

                    </div>

                    <div class="question" id='factionSpecificForm'>

                    </div>

                    <div class="question">
                        <label for="health">Health:</label>
                        <p id='health'>10 (default)</p>
                        <label for="willpower">Willpower:</label>
                        <p id='willpower'>1 (default)</p>
                        <label for="energy">Energy:</label>
                        <p id='energy'>10 (WIP)</p>
                        <label for="virtue">Virtue:</label>
                        <p id='virtue'>6 (WIP)</p>
                    </div>





                    <div class="question">
                        <label for="patron">Patron (if any):</label>
                        <input id='patron' name='patron' value={patron} onChange={handleChange}></input>
                    </div>
                    <div class="question">
                        <label for="notes">Notes:</label>
                        <textarea id='notes' name='notes' value={notes} onChange={handleChange}></textarea>
                    </div>
                </section>

                <button type="submit">Create Character</button>
            </form>
        </div>
    );
}

export default CreateCharacterForm;