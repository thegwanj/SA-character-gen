import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <header>
                <nav>
                    <div class="navContainer">
                            <Link to="/SA-character-gen">
                                <img src="../img/logos/shadow-accord-logo-bw.png" alt="SA logo" height="40"/>
                            </Link>
                            <Link to="/SA-character-gen">
                                <h2>SA Character Sheet Maker</h2>
                            </Link>
                            <Link to="/SA-character-gen">
                                <img src="../img/logos/shadow-accord-logo-bw.png" alt="SA logo" height="40"/>
                            </Link>
                    </div>
                </nav>
            </header>
        );
}

export default Header;