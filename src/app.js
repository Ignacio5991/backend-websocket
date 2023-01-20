const express = require ('express');
const app = express();
const {Server} = require('socket.io');
const handlebars = require ('express-handlebars');
const viewsroute = require  ('./routes/views.route')
const productsroute = require ('./routes/products.route')
const cartsroute = require ('./routes/cart.route')
const {connectionSocket} = require ('./utils/socket.io')
const server = express();

const httpServer = app.listen(8080, ()=>{
    console.log('el servidor esta corriendo en el puerto 8080')
})

// Handlebars 

server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');

//Express

server.use(express.static(__dirname+'/public'));
server.use(express.json())
server.use(express.urlencoded({extended:true}))

//Rutas 
server.use('/api/products/',productsroute);

//Rutas del cart
server.use('/api/carts/',cartsroute);

// Rutas del views
server.use('/',viewsroute)

//handlebar
app.engine ('handlebars', handlebars.engine());


app.set('views',__dirname +'/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname +'/public'));

app.use('/',viewsroute);



connectionSocket(httpServer);