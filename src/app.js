const express = require ('express');
const {Server} = requiere ('socket.io');
const app = express();
const handlebars = require ('express-handlebars');
const routerViews = require ('./routes/views.route')

const httpServer = app.listen(8080, ()=>{
    console.log('el servidor esta corriendo en el puerto 8080')
})
const io = new Server (httpServer);

io.on('conection',socket =>{
    console.log ('nuevo usuario conectado')
});



const server = express();
const productsroute = require ('./routes/products.route')
const cartsroute = require ('./routes/cart.route')
server.use(express.urlencoded({extended:true}))
server.use(express.json())

server.use('/api/products/', productsroute);
server.use('/api/products/',productsroute);
server.use('/api/products/',productsroute);
server.use('/api/products/',productsroute);
server.use('/api/products/',productsroute);


//Rutas del cart

server.use('/api/carts/',cartsroute);
server.use('/api/carts/',cartsroute);
server.use('/api/carts/',cartsroute);

server.listen(8080,()=>{
    console.log("Servidor Escuchando en el puerto 8080")
})

//handlebar
app.engine ('handlebars', handlebars.engine());

app.set('view.engine','handlebars');

app.use(express.static, ('public'));

app.use('/',router.Views);

//socket
const socketServer =socketIo(httpServer);

socketServer.on('conection',(socket)=>{
    console.log('cliente conectado')
})
