// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';  

// Import pages
import CreateCharacter from './pages/CreateCharacter';
import HomePage from './pages/HomePage';
import ViewSheet from './pages/ViewSheet';

// Import components
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  
function App() {

    return (
        <ApolloProvider client = {client}>
            <Router>

                <Header />

                <Banner />
                
                <Routes>
                    <Route
                        path="/SA-character-gen"
                        element={<HomePage/>}
                    />
                    <Route 
                        path="/CreateCharacter"
                        element={<CreateCharacter/>}
                    />
                    <Route
                        path="/ViewSheet"
                        element={<ViewSheet/>}
                    />
                </Routes>

                <Footer />

            </Router>
        </ApolloProvider>
    );
}

export default App;