//rotas que adiciona shopCars ao projeto
const express       = require('express');
const router        = express.Router();
const ShopCar       = require('../models/ShopCar');

//add car via post
router.get('/test', (req,res)=>{
    res.send('deu');
});

//post para adicionar shopCar 
router.post('/add', (req, res)=>{
    let {titulo, valor, marca, modelo, ano, cor, new_car} = req.body;

    //insere dados
    ShopCar.create({
        titulo, valor, marca, modelo, ano, cor, new_car
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log("Erro ao enviar os dados", err));
});

module.exports = router;