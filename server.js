// app contient express
const app = require('./app');
// On défini le port souhaité
const port = 4000;
// On demande d'écouter le port en question
app.listen(port, () => {
    console.log(`connexion ok sur le port ${port}`);
})