import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            <div class="spacer">
                <Link to="/CreateCharacter">
                    <div class="homeButton"><h3>Start</h3></div>
                </Link>
            </div>
        </main>
    );
}

export default HomePage;