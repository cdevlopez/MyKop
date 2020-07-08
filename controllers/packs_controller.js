//  import model
const Pack = require('../models/packs_model');
/////////////////////////////
// Get All packs 
exports.get_all_pack = (req, res) => {
    Pack.findAll().then((packs) => {
    console.log(packs);
    res.send(packs);
  });
};
/////////////////////////////
// Get One Pack
exports.get_one_pack = (req, res) => {
  const id = req.params.id;
  Pack.findByPk(id).then((packs) => {
    console.log(this.get_all_pack);
    res.send(packs);
  }).catch((err) => {
    console.log(err);
  });
}
/////////////////////////////
//  New pack
exports.create_pack = (req, res) => {
    Pack.create({
      numPack: req.body.numPack,
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
    res.send('nouveau pack enregistré');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
//  Update pack
exports.update_pack = (req, res) => {
  const id = req.params.id;

  Pack.update({
    idPack: req.body.idPack,
    numPack: req.body.numPack,
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
        idPack: id
      }
    }
  ).then(() => {
    res.send('mis à jour du pack réussie !');
  }).catch(err => {
    res.status(400).send(err);
  });
};
/////////////////////////////
// Delete Pack
exports.delete_pack = (req, res) => {
    const id = req.params.id;

    Pack.destroy({
      where: { 
        idProduct: id 
      }
    }
  ).then(() => {
    res.send('le pack est supprimé');
  }).catch(err => {
    res.status(400).send(err);
  });
};
