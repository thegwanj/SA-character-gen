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

    // Template
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'friendName' && value.length <= 280) {
          setFriendName(value);
          // setFriendNote(value);
          setCharacterCount(value.length);
        }else  if( name === "friendNote" && value.length <= 280 ){
           setFriendNote(value);
    
        }
      };    

    return (
        <div class="characterForm">
            <form onSubmit={handleFormSubmit}>
                <input
                name=""
                placeholder=""
                value={friendName}
                className=""
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
                ></input>
                <textarea
                name="="
                placeholder=""
                value={friendNote}
                className=""
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

                <button type="submit">Create Character</button>
            </form>
        </div>
    );
}

export default CreateCharacterForm;