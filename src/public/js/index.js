const socket = io();

let user;

Swal.fire({
    title: 'Iniciar Sesion',
    text: 'Para acceder al chat debes autentificarte',
    icon: 'success',
        confirmButtonText: 'Aceptar',
        input: 'text',
    inputLabel: 'Ingresa tu nombre',
    inputValidator: (value) => {
            if (!value) {
                return 'Debes ingresar minimo un caracter'
            }
            user= value;
        },
        allowOutsideClick: false,
}).then ((result) => {
    socket.on ('new-user', (data) => {
        Swal.fire({
            title: 'Nuevo usuario conectado',
            text: `${data.user} se ha conectado`,
            toast: true,
            position: 'top-right',  
            timer: 3000,
            showConfirmButton: false,
        });
    });
    socket.emit('new-user', {user:result.value});
    user = result.value;
});

const chatBox = document.getElementById('chatBox');

chatBox.addEventListener('keyup', (e) => {
    if (e.key == 'Enter' && e.target.value != '') {
        let message = e.target.value;
        socket.emit('message', {
            user,
            message,
        });
        e.target.value = '';
    }
});

socket.on('message', (data) => {
    let history = document.getElementById('history');
    history.innerHTML += `<div style="display:flex; justify-content:${data.user == user ? 'start' : 'end'}"><p style="background-color:#dcf8c6;width: fit-content;padding: 10px;border-radius: 5px;">${data.user}: ${data.message}</p></div>`;
    // history.innerHTML += `<div class="${data.user == user ? "message-me" : ""}"><p><strong>${data.user}:</strong>${data.message}</p></div>`;
});

socket.on ('history',(data) => {
    let history = document.getElementById('history');
    data.forEach((item) => {
        history.innerHTML += `<div style="display:flex; justify-content:${item.user == user ? 'start' : 'end'}"><p style="background-color:#dcf8c6;">${item.user}: ${item.message}</p></div>`;
        // history.innerHTML += `<div class=${item.user == user ? "message-me" : ""}><p><strong>${item.user}:</strong>${item.message}</p></div>`;
    });
});

//Socket de productos
socket.on('init-products', (products) => {
  const main = document.getElementById('tiemporeal');
  main.innerHTML = ' ';
  products.forEach((product) => {
    main.innerHTML +=  `<div class="card col-3 m-2 border border-4 id="${product.id}">
     <div class="card-body">
       <h5 class="card-title text-center">${product.title}</h5>
       <img src="${product.thumbnail}" class="card-img-top">
       <p class="card-text text-center">${product.description}</p>
       <h3 class="card-text text-center ">$ ${product.price}</h3>
       <p class="card-text text-center ">cantidad: ${product.stock}</p>
       <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary">Agregar</button>
       </div>
   </div>
  </div>`
  });
});

socket.on('delete-products'),(id)=>{
    const product = document.getElementById('id');
    product.remove
}

socket.on('add-products',(products)=>{
    const main = document.getElementById('tiemporeal');
    main.innerHTML = `<div class="card col-3 m-2 border border-4 id="${products.id}">
    <img src="" class="card-img-top" alt="">
     <div class="card-body">
       <h5 class="card-title text-center">${products.title}</h5>
       <img src="${products.thumbnail}" class="card-img-top">
       <p class="card-text text-center">${products.description}</p>
       <h3 class="card-text text-center ">$ ${products.price}</h3>
       <p class="card-text text-center ">cantidad: ${products.stock}</p>
       <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary">Agregar</button>
       </div>
      </div>`;
})