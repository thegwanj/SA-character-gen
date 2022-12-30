import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SHEET } from '../../utils/mutations';


const CreateCharacterForm = () => {
    const [playerName, setPlayerName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [faction, setfaction] = useState('');
    const [friendNote, setFriendNote] = useState('');
    const [friendName, setFriendName] = useState('');

    const [addSheet, { error }] = useMutation(ADD_SHEET);
  
    // TODO: Create functions to handle the form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // Template
        try {
            const { data } = await addSheet({
                variables: {

                },
            });
        }
        catch (e){
            console.error(e);
        }
    };

    // Template
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        // Take values and use set to change state
    };    

    // Separate function to handle faction changes
    const handleFactionChange = (event) => {
        const { name, value } = event.target;

        // Take values and use set to change state

        // Using the value, update the subfactionForm

        // Using the value, update the factionSpecificForm
    }

    return (
        <div class="characterForm">
            <form onSubmit={handleFormSubmit}>
                <section class="formSection">
                    <div class="question">
                        <label for="playerName">Player name:</label>
                        <input id="playerName" name='playerName' value={playerName} onChange={handleChange}></input>
                    </div>

                    <div class="question">
                        <label for="characterName">Character name:</label>
                        <input id="characterName" name='characterName' value={characterName} onChange={handleChange}></input>
                    </div>

                    <label for='factionForm'>Select a faction:</label>
                    <div class="question" id='factionForm'>
                        <input id="human" name='faction' type="radio" value={faction} onChange={handleFactionChange}></input>
                        <label for="human">Human</label>
                        <input id="sorcerer" name='faction' type="radio" value={faction} onChange={handleFactionChange}></input>
                        <label for="sorcerer">Sorcerer</label>
                        <input id="shifter" name='faction' type="radio" value={faction} onChange={handleFactionChange}></input>
                        <label for="shifter">Shifter</label>
                        <input id="vampire" name='faction' type="radio" value={faction} onChange={handleFactionChange}></input>
                        <label for="vampire">Vampire</label>
                    </div>

                    <label for='subfactionForm'>Select a subfaction:</label>
                    <div class="question" id='subfactionForm'>

                    </div>

                    <div class="question" id='factionSpecificForm'>

                    </div>

                    <div class="question">
                        <label for="health">Health:</label>
                        <p id='health'>10 (default)</p>
                        <label for="willpower">Willpower:</label>
                        <p id='willpower'>1 (default)</p>
                    </div>
                </section>

                <button type="submit">Create Character</button>
            </form>
        </div>
    );
}

export default CreateCharacterForm;