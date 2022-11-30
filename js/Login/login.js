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
        console.log(dtuser);
        axios.post('http://localhost:3000/account/login', dtuser).then((response) =>{
            console.log("Se ingreso correctamente");
            console.log(response);
            sessionStorage.setItem("token",response);
           /*window.location = 'index.html';*/
        }).catch((err) => { 
            console.log(err);
        });

    });
}

document.addEventListener('DOMContentLoaded', () => {
    init_form();
});

/*
async function log_in(){
    event.preventDefault()
    let email = document.querySelector('#input_log_e').value;
    let password = document.querySelector('input_log_p').value;

    let loggedIn = {
        email,password
    }
    console.log(loggedIn);
}


document.addEventListener('DOMContentLoaded',() =>{
        log_in();
})
*/
