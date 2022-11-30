console.log("Carrito JS");
console.log("Token:", sessionStorage.getItem('token'));

const data = {
    authorization: sessionStorage.getItem('token')
}



axios.get('http://localhost:3000/carrito', { headers: data }).then((response) => {
    console.log(response);
    let elementos = "";
    response.map((item) => {
        const datos = axios.get('http://localhost:3000/productos/'+ item.id_producto);
        elementos += `
        <tr>
        <th scope="row">
            <div class="producto"><img src="${datos.img_url[0]}" class="prueba" /></div>
        </th>
        <td>
            <div>${datos.nombre}</div>
        </td>
        <td>
            <div>${datos.precio}</div>
        </td>
        <td class="cantidad">
            <div>${item.cantidad}</div>
        </td>
        <td>
            <div>${item.cantidad * datos.precio}</div>
        </td>
    </tr>`;
    
    });
    document.getElementById("tabla_productos").innerHTML = elementos;
}).catch((err) => {
    console.log(err);
});
