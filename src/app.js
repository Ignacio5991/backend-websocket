const express = require ('express');
const {Server} = require('socket.io');
const handlebars = require ('express-handlebars');
const productsRouteBD = require  ('./routes/products.routebd')
const productsroute = require ('./routes/products.route')
const cartsroute = require ('./routes/cart.route')
const {connectionSocket} = require ('./utils/socket.io');
const productsrouter = require('./routes/products.route');
const  {default:mongoose}  = require('mongoose');
const router = require('./routes/chatroute');
const routerView = require('./routes/viewroute');
const server = express();
mongoose.set("strictQuery",false)

const httpServer = server.listen(8080, ()=>{
    console.log('el servidor esta corriendo en el puerto 8080')
})

const io = new Server(httpServer);
const msgs= [];

io.on('connection', (socket) => {
    socket.on('new-user', (data) => {
        socket.broadcast.emit('new-user', {user: data.user});
    });
    console.log('nuevo usuario conectado');
    socket.broadcast.emit('new-user', {
        user: 'Gonzalo',
    })
    socket.emit('history', msgs);
    socket.on('message', (data) => {
    //   console.log(data);
      msgs.push(data);
      io.emit('message', data);
    });
});

//Conexion a mongoose data base

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
// mongoose.connect(
//     'mongodb+srv://Ignacio:4wmZz9ezRRKqgu85@admin.mtszt8r.mongodb.net/test',
//     (error)=>{
//         if (error){
//             console.log('Error de conexion', error);
//             process.exit();
//         }else{
//             console.log('Conectado a mongo')
//         }
//     }
// )

//Conexion a mongoose chat database

// mongoose.connect(
//     'mongodb+srv://Ignacio:4wmZz9ezRRKqgu85@admin.mtszt8r.mongodb.net/chat',
//     (error)=>{
//         if (error){
//             console.log('Error de conexion', error);
//             process.exit();
//         }else{
//             console.log('Conectado a mongo')
//         }
//     }
// )



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
server.use('/api/productsbd',productsRouteBD);
server.use('/',routerView);



// Ruta del chat
server.use ('/', router);

// connectionSocket (httpServer);