import React from "react";
import { Link } from 'react-router-dom';
import CreateCharacterForm from '../components/CreateCharacterForm';

const CreateCharacter = () => {
    return (
        <main class="createCharacterMain">
            <CreateCharacterForm />
        </main>
    );
};

export default CreateCharacter;