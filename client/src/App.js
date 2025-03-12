import React, { useState } from 'react';  
import logo from './logo.svg';
import './App.css';

function App() {
    const [msg, setMsg] = useState('');

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:5005/api');
            const data = await response.json();
            console.log("Données reçues :", data); // 🔥 Ajout du console.log()
            setMsg(data.message);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={handleClick}>
                    Bouton
                </button>
                <p>{msg}</p> {/* Affichage du message dans l'UI */}
            </header>
        </div>
    );
}

export default App;
