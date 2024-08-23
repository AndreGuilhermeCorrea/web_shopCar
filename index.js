const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const ShopCar = require('./models/shopCar')

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`);
});

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração do Handlebars
app.set('views', path.join(__dirname, 'views'));

// Cria uma instância do Express Handlebars e define o layout principal
const hbs = exphbs.create({
    defaultLayout: 'main',
    // Outras opções podem ser adicionadas aqui, se necessário
});

// Configura o motor de visualização para usar Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Conexão com o banco de dados
db.authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso!");
    })
    .catch(err => {
        console.log("Erro ao criar conexão com banco de dados", err);
    });

// Rotas
app.get('/', (req, res) => {
    ShopCar.findAll({order: [
        ['createdAt', 'DESC']
    ]})
    .then(shopCars =>{
        res.render("index", {
            shopCars
        }); 
    });
    
});

// Cars routes
app.use('/shopCars', require('./routes/shopCars'));
