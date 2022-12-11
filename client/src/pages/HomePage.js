import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            <p>homepage test</p>

            <Link to="/CreateCharacter">
                <h3>Testing route to CreateCharacter</h3>
            </Link>
        </main>
    );
}

export default HomePage;