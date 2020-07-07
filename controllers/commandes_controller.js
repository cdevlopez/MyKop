//  import model
const Comm = require('../models/commandes_model');
/////////////////////////////
// Get All commandes 
exports.get_all_commande = (req, res) => {
    Comm.findAll().then((commande) => {
    console.log(commande);
    res.send(commande);
  });
};
/////////////////////////////
// Get One commande
exports.get_one_commande = (req, res) => {
  const id = req.params.id;
  Comm.findByPk(id).then((commande) => {
    console.log(this.get_all_commande);
    res.send(commande);
  }).catch((err) => {
    console.log(err);
  });
}
/////////////////////////////
//  Create commande
exports.create_commande = (req, res) => {
  Comm.create({
      numCommande: req.body.numCommande,
      dateCommande: req.body.dateCommande
    }
  ).then(() => {
    res.send('commande enregistrée');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
//  Update commande
exports.update_commande = (req, res) => {
  const id = req.params.id;

  Comm.update({
    numCommande: req.body.numCommande,
    dateCommande: req.body.dateCommande
    },
    {
      where: {
        idCommande: id
      }
    }
  ).then(() => {
    res.send('mis à jour Ok !');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
// Delete commande
exports.delete_commande = (req, res) => {
    const id = req.params.id;

    Comm.destroy({
      where: { 
        idCommande: id 
      }
    }
  ).then(() => {
    res.send('Commande supprimée');
  }).catch(err => {
    res.status(400).send(err);
  });
};