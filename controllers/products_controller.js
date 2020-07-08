//  import model
const Product = require('../models/products_model');
/////////////////////////////
// Get All products 
exports.get_all_product = (req, res) => {
    Product.findAll().then((products) => {
    console.log(products);
    res.send(products);
  });
};
/////////////////////////////
// Get One Product
exports.get_one_product = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id).then((products) => {
    console.log(this.get_all_product);
    res.send(products);
  }).catch((err) => {
    console.log(err);
  });
}
/////////////////////////////
//  New product
exports.create_product = (req, res) => {
  Product.create({
      numProduct: req.body.numProduct,
      description: req.body.description,
      price: req.body.price,
      size: req.body.size,
      type: req.body.type,
      image: req.body.image,
      club: req.body.club,
      nation: req.body.nation,
      player: req.body.player
    }
  ).then(() => {
    res.send('nouveau produit enregistré');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
//  Update product
exports.update_product = (req, res) => {
  const id = req.params.id;

  Account.update({
    idProduct: req.body.idProduct,
    numProduct: req.body.numProduct,
    description: req.body.description,
    price: req.body.price,
    size: req.body.size,
    type: req.body.type,
    image: req.body.image,
    club: req.body.club,
    nation: req.body.nation,
    player: req.body.player
    },
    {
      where: {
        idProduct: id
      }
    }
  ).then(() => {
    res.send('mis à jour du produit réussie !');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
// Delete Product
exports.delete_product = (req, res) => {
    const id = req.params.id;

    Product.destroy({
      where: { 
        idProduct: id 
      }
    }
  ).then(() => {
    res.send('le produit est supprimé');
  }).catch(err => {
    res.status(400).send(err);
  });
};
