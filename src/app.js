const express = require ('express');
const {Server} = require('socket.io');
const handlebars = require ('express-handlebars');
const productsRouteBD = require  ('./routes/products.routebd')
const productsroute = require ('./routes/products.route')
const cartsroute = require ('./routes/cart.route')
const {connectionSocket} = require ('./utils/socket.io');
const productsrouter = require('./routes/products.route');
const  {default:mongoose}  = require('mongoose');
const server = express();
mongoose.set("strictQuery",false)

 server.listen(8080, ()=>{
    console.log('el servidor esta corriendo en el puerto 8080')
})

mongoose.connect(
    'mongodb+srv://Ignacio:4wmZz9ezRRKqgu85@admin.mtszt8r.mongodb.net/?retryWrites=true&w=majority',
    (error)=>{
        if (error){
            console.log('Error de conexion', error);
            process.exit();
        }else{
            console.log('Conectado a mongo')
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


//Rutas del cart
server.use('/api/carts/',cartsroute);

// Rutas del views
server.use('/api/productsbd',productsRouteBD)



