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
const ordersRoutes = require('./routes/orders_route');
const ordersPlacedRoutes = require('./routes/ordersPlaced_route');
const productsRoutes = require('./routes/products_route');
const packsRoutes = require('./routes/packs_route');
const { urlencoded } = require('body-parser');

app.use(accountsRoutes);
app.use(ordersRoutes);
app.use(ordersPlacedRoutes);
app.use(productsRoutes);
app.use(packsRoutes);

//  exporter le module qui utilise express
module.exports = app;