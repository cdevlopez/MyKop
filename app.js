//  on importe express, qui permet de structurer node
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
var corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const accountsRoutes = require('./routes/accounts_route');
const commandeRoutes = require('./routes/commande_route');
const productRoutes = require('./routes/products_route');
const packRoutes = require('./routes/packs_route');
const { urlencoded } = require('body-parser');

app.use(accountsRoutes);
app.use(commandeRoutes);
app.use(productRoutes);
app.use(packRoutes);

//  exporter le module qui utilise express
module.exports = app;