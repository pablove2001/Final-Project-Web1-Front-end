console.log("Incio de JS");

const url = "http://localhost:3000/productos";

window.onload = () => {
  fetch(url)
    .then((response) => response.json())
    .then((productos) => {
      let elementos = "";
      productos.map((producto) => {
        elementos += `<a href="/pages/producto.html#${producto._id}">
              <div>
                <div class="div-img">
                  <img src="${producto.img_url[0]}" alt="imagen producto" />
                </div>
                <div class="info-producto">
                  <div class="titulo-producto">
                    <p>
                      ${producto.nombre}
                    </p>
                  </div>
                 
                  <span>$${producto.precio.toFixed(2)}</span>
                </div>
              </div>
            </a>`;
      });
      document.getElementById("div-productos").innerHTML = elementos;
    });
};

console.log("Fin del js");
