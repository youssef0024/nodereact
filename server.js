const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

const PORT = process.env.PORT || 8090;


app.use(express.json());
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});

app.get('/api', (req, res) => {
    res.json({ message: 'Liste des produits' });
}); 

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur khkhkhkh!');
});





