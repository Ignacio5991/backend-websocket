const socket = io();
socket.on('init-products', (products) => {
  const main = document.getElementById('tiemporeal');
  main.innerHTML = ' ';
  products.forEach((product) => {
    main.innerHTML += `<div id:"${product.id}">
          <div>${product.title}</div>
          </div>`;
  });
});

socket.on('delete-products'),(id)=>{
    const product = document.getElementById('id');
    product.remove
}

socket.on('add-products',(products)=>{
    const main = document.getElementById('tiemporeal');
    main.innerHTML = `<div id:"${products.id}">
          <div>${products.title}</div>
          </div>`;
})