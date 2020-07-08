//  import model
const OrdersPlaced = require('../models/ordersPlaced_model');
/////////////////////////////
// Get All ordersPlaced 
exports.get_all_ordersPlaced = (req, res) => {
    OrdersPlaced.findAll().then((ordersPlaced) => {
    console.log(ordersPlaced);
    res.send(ordersPlaced);
  });
};
/////////////////////////////
// Get One orderPlaced
exports.get_one_ordersPlaced = (req, res) => {
  const id = req.params.id;
  OrdersPlaced.findByPk(id).then((ordersPlaced) => {
    console.log(this.get_all_ordersPlaced);
    res.send(ordersPlaced);
  }).catch((err) => {
    console.log(err);
  });
}
/////////////////////////////
//  Create ordersPlaced
// exports.create_ordersPlaced = (req, res) => {
//     OrdersPlaced.create({
//       numOrderPlaced: req.body.numOrdersPlaced,
//       dateOrderPlaced: req.body.dateOrdersPlaced
//     }
//   ).then(() => {
//     res.send('commande enregistrée');
//   }).catch(err => {
//     res.status(400).send(err);
//   });
// };
/////////////////////////////
//  Update dateOrders
exports.update_ordersPlaced = (req, res) => {
  const id = req.params.id;

  OrdersPlaced.update({
      numOrdersPlaced: req.body.numOrdersPlaced,
      dateOrdersPlaced: req.body.dateOrdersPlaced
    },
    {
      where: {
        idOrderPlaced: id
      }
    }
  ).then(() => {
    res.send('mis à jour Ok !');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
// Delete ordersPlaced
exports.delete_ordersPlaced = (req, res) => {
    const id = req.params.id;

    OrdersPlaced.destroy({
      where: { 
        idOrderPlaced: id 
      }
    }
  ).then(() => {
    res.send('Commande supprimée');
  }).catch(err => {
    res.status(400).send(err);
  });
};