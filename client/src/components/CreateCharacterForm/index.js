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

        // Add to element depending on what faction is selected (dropdown menu?)
        switch(value){
            case "Human":
                console.log("Human!");

                // TODO: Make Claimed a checkbox option instead. Then, figure out how this will show up in our Sheet
                subFactionContent.innerHTML=`
                <label for="subFactionSelection">Select a subfaction:</label>
                <select id='subFactionSelection' name='subFactionSelection' onChange={handleChange} required>
                    <option value="Commoner">Commoner</option>
                    <option value="Ghoul">Ghoul</option>
                    <option value="Gifted Kin">Gifted Kin</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Faithful">Faithful</option>
                </select>
                <label for="isClaimed">Is this character also a Claimed?</label>
                <input id='isClaimed' name='isClaimed' type="checkbox"></input>
                `;
                break;

            case "Shifter":
                console.log("Shifter!");

                subFactionContent.innerHTML=`
                <label for="subFactionSelection">Select Breed, Auspice, and Tribe:</label>
                <div id='subFactionSelection' name='subFactionSelection' onChange={handleChange} required>
                    <label for="breed">Breed</label>
                    <select id='breed'>
                        <option value="Homid">Homid</option>
                        <option value="Lupus">Lupus</option>
                        <option value="Natus">Natus</option>
                    </select>
                    <label for="auspice">Auspice</label>
                    <select id='auspice'>
                        <option value="Ahroun">Ahroun</option>
                        <option value="Galliard">Galliard</option>
                        <option value="Philodox">Philodox</option>
                        <option value="Ragabash">Ragabash</option>
                        <option value="Theurge">Theurge</option>
                    </select>
                    <label for="tribe">Tribe</label>
                    <select id='tribe'>
                        <option value="Black Furies">Black Furies</option>
                        <option value="Black Spiral Dancer">Black Spiral Dancers</option>
                        <option value="Bone Gnawers">Bone Gnawers</option>
                        <option value="Child of Gaia">Child of Gaia</option>
                        <option value="Fenrir">Fenrir</option>
                        <option value="Fiana">Fiana</option>
                        <option value="Red Talons">Red Talons</option>
                        <option value="Shadow Lords">Shadow Lords</option>
                        <option value="Silent Striders">Silent Striders</option>
                        <option value="Silver Fangs">Silver Fangs</option>
                        <option value="Warders of Man">Warders of Man</option>
                        <option value="Bagheera">Bagheera</option>
                        <option value="Bubasti">Bubasti</option>
                        <option value="Ceilican">Ceilican</option>
                        <option value="Swara">Swara</option>
                        <option value="Ananasi">Ananasi</option>
                        <option value="Corax">Corax</option>
                        <option value="Ratkin">Ratkin</option>
                    </select>
                </div>
                `;
                break;

            case "Vampire":
                console.log("Vampire!");

                subFactionContent.innerHTML=`
                <label for="subFactionSelection">Select a subfaction:</label>
                <select id='subFactionSelection' name='subFactionSelection' onChange={handleChange} required>
                    <option value="Assamite">Assamite</option>
                    <option value="Baali">Baali</option>
                    <option value="Brujah">Brujah</option>
                    <option value="Caitiff">Caitiff</option>
                    <option value="Cappadocian">Cappadocian</option>
                    <option value="Gangrel">Gangrel</option>
                    <option value="Giovanni">Giovanni</option>
                    <option value="Lamia">Lamia</option>
                    <option value="Lasombra">Lasombra</option>
                    <option value="Malkavian">Malkavian</option>
                    <option value="Nosferatu">Nosferatu</option>
                    <option value="Ravnos">Ravnos</option>
                    <option value="Salubri">Salubri</option>
                    <option value="Toreador">Toreador</option>
                    <option value="Tremere">Tremere</option>
                    <option value="Tzimisce">Tzimisce</option>
                    <option value="Ventrue">Ventrue</option>
                </select>
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
                <select id='rank' name='rank' required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label for="deedName">Deed name (if applicable):</label>
                <input id='deedName' name='deedName' onChange={handleChange}></input>
                `;
                break;

            case "Wraith":
                console.log("Wraith!");

                newContent.innerHTML=`
                <label for="passion">Passion(s):</label>
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