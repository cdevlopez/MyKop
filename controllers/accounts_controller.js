//  import model
const Account = require('../models/accounts_model');
/////////////////////////////
// Get All accounts 
exports.get_all_account = (req, res) => {
    Account.findAll().then((accounts) => {
    console.log(accounts);
    res.send(accounts);
  });
};
/////////////////////////////
// Get One Account
exports.get_one_account = (req, res) => {
  const id = req.params.id;
  Account.findByPk(id).then((accounts) => {
    console.log(this.get_all_account);
    res.send(accounts);
  }).catch((err) => {
    console.log(err);
  });
}
/////////////////////////////
//  Create account
exports.create_account = (req, res) => {
  Account.create({
      numClient: req.body.numClient,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      address: req.body.address,
      telNumber: req.body.telNumber
    }
  ).then(() => {
    res.send('enregistré');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
//  Update account
exports.update_account = (req, res) => {
  const id = req.params.id;

  Account.update({
    idClient: req.body.idClient,
    numClient: req.body.numClient,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    address: req.body.address,
    telNumber: req.body.telNumber
    },
    {
      where: {
        idClient: id
      }
    }
  ).then(() => {
    res.send('mis à jour Ok !');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
// Delete Account
exports.delete_account = (req, res) => {
    const id = req.params.id;

    Account.destroy({
      where: { 
        idClient: id 
      }
    }
  ).then(() => {
    res.send('Compte supprimé');
  }).catch(err => {
    res.status(400).send(err);
  });
};
