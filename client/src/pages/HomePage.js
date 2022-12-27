import React from "react";
import { Link } from 'react-router-dom';
import SheetList from '../components/SheetList/';

const HomePage = () => {
    return (
        <main>
            <div class="spacer">
                <Link to="/CreateCharacter">
                    <div class="homeButton"><h3>Start</h3></div>
                </Link>
            </div>

            <SheetList />
        </main>
    );
}

export default HomePage;