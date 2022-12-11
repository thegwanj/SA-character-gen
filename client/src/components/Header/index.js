import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <header>
                <nav>
                    <Link to="/">
                        <h1>SA Character Sheet Maker</h1>
                    </Link>
                </nav>
            </header>
        );
}

export default Header;