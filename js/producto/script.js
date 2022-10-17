console.log("Incio de JS");

const url =
  "https://my-json-server.typicode.com/pablove2001/My-JSON-Server-Productos/productos";

fetch(url)
  .then((response) => response.json())
  .then((productos) => {
    let producto_id = -1;
    const length_url = window.location.href.length - 1;
    const url_href = window.location.href;

    for (let i = length_url; i > 0; i--) {
      if (url_href[i] == "#") {
        producto_id = url_href.substr(i + 1, length_url - i);
        break;
      }
    }
    const producto = productos[producto_id];
    console.log(producto);

    // galeria
    let galeria = "";
    producto.img_url.map((imagen) => {
      galeria += `<div>
              <img
                class="img-full"
                src="${imagen}"
                alt="imagen producto"
              />
            </div>`;
    });
    document.getElementById("galeria").innerHTML = galeria;

    // foto
    let foto = `<img
              class="img-full"
              src="${producto.img_url[0]}"
              alt="imagen producto"
            />`;
    document.getElementById("foto").innerHTML = foto;

    // nombreProducto
    let nombreProducto = `${producto.nombre}`;
    document.getElementById("nombreProducto").innerHTML = nombreProducto;

    // precio
    let precio = `$${producto.precio}`;
    document.getElementById("precio").innerHTML = precio;

    // funcion
    let funcion = `${producto.funcion}`;
    document.getElementById("funcion").innerHTML = funcion;

    // descripcion
    let descripcion = `${producto.descripcion}`;
    document.getElementById("descripcion").innerHTML = descripcion;

    // soluciones
    let soluciones = `${producto.soluciones}`;
    document.getElementById("soluciones").innerHTML = soluciones;

    // ingredientes_clave
    let ingredientes_clave = `${producto.ingredientes_clave}`;
    document.getElementById("ingredientes_clave").innerHTML =
      ingredientes_clave;
  });

console.log("Final  de JS");
