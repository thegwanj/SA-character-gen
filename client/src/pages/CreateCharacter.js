import React from "react";
import { Link } from 'react-router-dom';

const CreateCharacter = () => {
    return (
        <div>
            <p>CreateCharacter test</p>

            <Link to="/ViewSheet">
                <h3>Testing route to ViewSheet</h3>
            </Link>
        </div>
    );
}

export default CreateCharacter;