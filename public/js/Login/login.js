console.log("Inicio JS");

//Funciones:
function init_form() {
    const log_in = document.querySelector('#log-in-form');
    log_in.addEventListener('submit', (ev) => {
        ev.preventDefault();
        console.log('Este es el evento', ev);
        let input_log = document.querySelectorAll('#log-in-form .input_log');

        input_log= [...input_log];//separacion 

        const dtuser = {
            email: "",
            password: ""
        }
        input_log.map((element) => {
            const value = element.value;
            const name = element.name;
            dtuser[name] = value;
        });
        if(dtuser.email.length == 0 ){
            alert('Correo vacio');
            return; 
        }
        if(dtuser.password.length < 8){
            alert('Contraseña incompleta');
            return; 
        }
        console.log(dtuser);
        axios.post('https://cleorganic.herokuapp.com/account/login', dtuser).then((response) =>{
            console.log("Se ingreso correctamente");
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

