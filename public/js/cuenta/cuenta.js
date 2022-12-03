console.log("Inicio JS");
console.log("Token:", sessionStorage.getItem('token'));

const data = {
    authorization: sessionStorage.getItem('token')
}
axios.get('https://cleorganic.herokuapp.com/account', { headers: data }).then((response) => {

}).catch((err) => {
    window.location = 'log-in.html';  
});

axios.get('https://cleorganic.herokuapp.com/account', { headers: data }).then((response) => {
    console.log('res', response);
    var elemento = `
    <td>Nombre: ${response.first_name} ${response.last_name}</td>
    <tr>
        <td>Correo: ${response.email}</td>
    </tr>`;
    document.getElementById("info").innerHTML = elemento;

}).catch((err) => {
    console.log(err);
});

const buttoncerrar = document.getElementById('cerrar');
buttoncerrar.addEventListener('click', () => {
    console.log('Cerrar');
    sessionStorage.setItem("token",'');
    window.location = 'index.html';         
});     