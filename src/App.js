import React from 'react';
import './App.css'; // Importing the CSS file
import GalaxyList from './components/GalaxyList';

function App() {
    return (
        <div className="App">
            <GalaxyList />
            <p className="jaro-quote">The universe is a riddle, and every answer reveals another question...</p>
            <p className="cedarville-cursive-regular">Look at the night sky, what galaxies do you see?</p>
            <div id="copyright">
                (c) Tobias Fu, May 2024
            </div>
        </div>
    );
}

export default App;
