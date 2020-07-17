const User = require('../models/users_model');

exports.login = (req, res) => {
    const name = req.body.name;
    const password = req.body.password
    User.findOne({name: name}).then(user => {
        if(user.name === name && user.password === password) {
            res.send(user);
        } else {
            res.send({message: "Le mot de passe est incorrect"});
        }
    }).catch(() => res.send("L'utilisateur n'existe pas"));
}