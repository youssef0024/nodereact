const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 8090;


const app = express();
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});

app.get('/api', (req, res) => {
    res.json({ message: 'Liste des produits' });
}); 

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur khkhkhkh!');
});

app.use(express.json());


