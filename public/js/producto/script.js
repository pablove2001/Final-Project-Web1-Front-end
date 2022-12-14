console.log("Incio de JS");
console.log("Token:", sessionStorage.getItem("token"));

const url = "https://cleorganic.herokuapp.com/productos/";
let producto_id = -1;

window.onload = () => {
  //let producto_id =-1;
  const length_url = window.location.href.length - 1;
  const url_href = window.location.href;

  for (let i = length_url; i > 0; i--) {
    if (url_href[i] == "#") {
      producto_id = url_href.substr(i + 1, length_url - i);
      break;
    }
  }

  fetch(url + producto_id)
    .then((response) => response.json())
    .then((producto) => {
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
};

const buttonagregar = document.getElementById("addc");
buttonagregar.addEventListener("click", () => {
  console.log("Click");
  if (sessionStorage.getItem("token") == null) {
    window.location = "log-in.html";
  }
  const cantidad = document.querySelector('input[name="cantidad"]').value;
  const item = document.querySelector(".item");

  const data = {
    authorization: sessionStorage.getItem("token"),
  };
  const dbody = {
    id_producto: producto_id,
    cantidad: cantidad,
  };
  axios
    .put("https://cleorganic.herokuapp.com/carrito", dbody, { headers: data })
    .then((response) => {
      console.log(response);
      alert("Se agrego correctamente");
    })
    .catch((err) => {
      console.log(err);
    });
});
