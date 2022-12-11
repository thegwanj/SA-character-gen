// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import CreateCharacter from './pages/CreateCharacter';
import HomePage from './pages/HomePage';
import ViewSheet from './pages/ViewSheet';

// Import components
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

    return (
        <Router>

            <Header />
            
            <Banner />

            <Routes>
                <Route 
                    path="/CreateCharacter"
                    element={<CreateCharacter/>}
                />
                <Route
                    path="/"
                    element={<HomePage/>}
                />
                <Route
                    path="/ViewSheet"
                    element={<ViewSheet/>}
                />
            </Routes>

            <Footer />

        </Router>
    );
}

export default App;