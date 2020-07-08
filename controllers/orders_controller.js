//  import model
const Orders = require('../models/orders_model');
/////////////////////////////
// Get All orders 
exports.get_all_orders = (req, res) => {
  Orders.findAll().then((orders) => {
    console.log(orders);
    res.send(orders);
  });
};
/////////////////////////////
// Get One order
exports.get_one_order = (req, res) => {
  const id = req.params.id;
  Orders.findByPk(id).then((orders) => {
    console.log(this.get_all_orders);
    res.send(orders);
  }).catch((err) => {
    console.log(err);
  });
}
/////////////////////////////
//  Create orders
exports.create_order = (req, res) => {
  Orders.create({
      numOrder: req.body.numOrders,
      dateOrder: req.body.dateOrders
    }
  ).then(() => {
    res.send('commande enregistrée');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
//  Update dateOrders
exports.update_order = (req, res) => {
  const id = req.params.id;

  Orders.update({
      numOrder: req.body.numOrders,
      dateOrder: req.body.dateOrders
    },
    {
      where: {
        idOrder: id
      }
    }
  ).then(() => {
    res.send('mis à jour Ok !');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
// Delete order
exports.delete_order = (req, res) => {
    const id = req.params.id;

    Orders.destroy({
      where: { 
        idOrder: id 
      }
    }
  ).then(() => {
    res.send('Commande supprimée');
  }).catch(err => {
    res.status(400).send(err);
  });
};