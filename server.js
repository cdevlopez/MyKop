// assure la mise en route d'express
let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Yo MyKop');
  });

app.listen(4000, function () {
    console.log("Serveur lancé sur le port 4000");
  });

  
