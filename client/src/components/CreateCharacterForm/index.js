import React from "react";

const CreateCharacterForm = () => {
    // TODO: Create functions to handle the form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // Template
        try {

        }
        catch (e){
            console.error(e);
        }
    };

    return (
        <div class="characterForm">
            <form onSubmit={handleFormSubmit}>
                <button type="submit">Create Character</button>
            </form>
        </div>
    );
}

export default CreateCharacterForm;