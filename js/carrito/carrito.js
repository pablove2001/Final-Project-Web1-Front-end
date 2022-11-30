console.log("Carrito JS");
console.log("Token:", sessionStorage.getItem('token'));

const data = {
    authorization: sessionStorage.getItem('token')
}

axios.get('http://localhost:3000/account', { headers: data }).then((response) => {

}).catch((err) => {
    window.location = 'log-in.html';  
});


axios.get('http://localhost:3000/carrito', { headers: data }).then((response) => {
    console.log(response);
    var elementos = "";
    response.map((item) => {
        axios.get('http://localhost:3000/productos/' + item.id_producto).then((producto) => {
            console.log('Datos', producto);
            elementos += `
            <tr>
            <td scope="row">
                <div class="producto"><img src="${producto.img_url[0]}" class="prueba" /></div>
            </td>
            <td>
                <div>${producto.nombre}</div>
            </td>
            <td>
                <div>${producto.precio}</div>
            </td>
            <td class="cantidad">
                <div>${item.cantidad}</div>
            </td>
            <td>
                <div>${item.cantidad * producto.precio}</div>
            </td>
        </tr>`;

        document.getElementById("tabla_productos").innerHTML = elementos;
        }).catch((err) => {
            console.log(err);
        });

    });
});

const buttoneliminar = document.getElementById('eliminar');
buttoneliminar.addEventListener('click', () => {
    console.log('Eliminado');
    axios.delete('http://localhost:3000/carrito/all',{ headers: data}).then((respuesta) =>{
        console.log('respuesta',respuesta);
        document.getElementById("tabla_productos").innerHTML = '';
        alert('Tu carrito fue eliminado');
    }).catch((err) => {
        console.log(err);
    });     
});

const buttoncomprar = document.getElementById('btn-pago');
buttoncomprar.addEventListener('click', () => {
    console.log('Comprar');
    axios.delete('http://localhost:3000/carrito/all',{ headers: data}).then((respuesta) =>{
        console.log('respuesta',respuesta);
        document.getElementById("tabla_productos").innerHTML = '';
        alert('Tu compra fue exitosa');
    }).catch((err) => {
        console.log(err);
    });     
});

