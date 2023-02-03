const express = require ('express');
const {Server} = require('socket.io');
const handlebars = require ('express-handlebars');
const viewsroute = require  ('./routes/views.route')
const productsroute = require ('./routes/products.route')
const cartsroute = require ('./routes/cart.route')
const {connectionSocket} = require ('./utils/socket.io');
const productsrouter = require('./routes/products.route');
const server = express();

const httpServer = server.listen(8080, ()=>{
    console.log('el servidor esta corriendo en el puerto 8080')
})

mongoose.connect(
    "mongodb+srv://Ignacio:<hjZ15KFFMFdCu44S>@admin.mtszt8r.mongodb.net/?retryWrites=true&w=majority",
    (error)=>{
        if (error){
            console.log('Error de conexion', error);
            process.exit();
        }else{
            console.log('El servidor esta corriendo en el puerto 8080')
        }
    }
)

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
server.use('/api/products',productsrouter)

//Rutas del cart
server.use('/api/carts/',cartsroute);

// Rutas del views
server.use('/',viewsroute)

//handlebar
server.engine ('handlebars', handlebars.engine());


server.set('views',__dirname +'/views');
server.set('view engine', 'handlebars');

server.use(express.static(__dirname +'/public'));

server.use('/',viewsroute);



connectionSocket(httpServer);