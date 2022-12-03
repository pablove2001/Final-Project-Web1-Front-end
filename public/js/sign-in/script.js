console.log("Inicio JS");

//Funciones:
function init_form() {
    const sign_up = document.querySelector('#sign_up_form');
    sign_up.addEventListener('submit', (ev) => {
        ev.preventDefault();
        console.log('Este es el evento', ev);
        let input_sign = document.querySelectorAll('#sign_up_form .input_sign');

        input_sign= [...input_sign];//separacion 

        const dtuser = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }

        input_sign.map((element) => {
            const value = element.value;
            const name = element.name;
            dtuser[name] = value;
        });
        if(dtuser.first_name.length == 0){
            alert('Nombre vacio');
            return; 
        }
        if(dtuser.last_name.length == 0){
            alert('Apellido vacio');
            return; 
        }
        if(dtuser.email.length == 0 ){
            alert('Correo vacio');
            return; 
        }
        if(dtuser.password.length < 8){
            alert('La contraseña debe tener minimo 8 caracteres');
            return; 
        }
        axios.post('https://cleorganic.herokuapp.com/account/signin', dtuser).then((response) =>{
            console.log("Se registro correctamente");
            console.log(response);
            sessionStorage.setItem("token",response);
            window.location = 'index.html';
        }).catch((err) => { 
            alert(err);

        });

    });
}

document.addEventListener('DOMContentLoaded', () => {
    init_form();
});
