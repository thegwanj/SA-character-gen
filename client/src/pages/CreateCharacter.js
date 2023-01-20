import React from "react";
import { Link } from 'react-router-dom';
import CreateCharacterForm from '../components/CreateCharacterForm';

const CreateCharacter = () => {
    return (
        <main class="createCharacterMain">
            <CreateCharacterForm />
            <Link to="/ViewSheet">
                <div class="homeButton"><h3>ViewSheet Test</h3></div>
            </Link>
        </main>
    );
};

export default CreateCharacter;