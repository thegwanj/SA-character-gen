import React from "react";
import { Link } from 'react-router-dom';
import CreateCharacterForm from '../components/CreateCharacterForm';

// TODO: Create and implement a form component
const CreateCharacter = () => {
    return (
        <main class="createCharacterMain">
            <CreateCharacterForm />
            <Link to="/ViewSheet">
                    <h3>Testing route to ViewSheet</h3>
            </Link>
        </main>
    );
};

export default CreateCharacter;