//rotas que adiciona shopCars ao projeto
const express       = require('express');
const router        = express.Router();
//const ShopCar       = require('../models/ShopCar');

//rota de teste
router.get('/test', (req,res)=>{
    res.send('deu');
});

//rota de busca do formulário
router.get('/add', (req,res)=>{
    res.render('add');
});

//post para adicionar shopCar 
router.post('/add', (req, res)=>{
    let {titulo, valor, marca, modelo, ano, cor, caracteristica, new_car} = req.body;

    //insere dados
    ShopCar.create({
        titulo, valor, marca, modelo, ano, cor, caracteristica, new_car
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log("Erro ao enviar os dados", err));
});

module.exports = router;