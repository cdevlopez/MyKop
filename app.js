//  on importe express, qui permet de structurer node
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
var corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));
//  app.use(cors);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//  importer les methodes depuis le controller
// const accountsController = require('./controllers/accounts_controller');

//  on importe la méthode connex depuis le fichier database
// const database = require('./models/db');

const accountsRoutes = require('./routes/accounts_route');
const commandeRoutes = require('./routes/commande_route');
const { urlencoded } = require('body-parser');



app.use(accountsRoutes);
app.use(commandeRoutes);

//  exporter le module qui utilise express
module.exports = app;