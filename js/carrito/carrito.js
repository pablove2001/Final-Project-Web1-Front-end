console.log("Carrito JS");
console.log("Token:", sessionStorage.getItem('token'));

const data = {
    authorization: sessionStorage.getItem('token')
}
axios.get('http://localhost:3000/carrito', data).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});