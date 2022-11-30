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
//        console.log()

        input_sign.map((element) => {
            const value = element.value;
            const name = element.name;
            dtuser[name] = value;
        });

        axios.post('//localhost:3000/account/signin', dtuser).then((response) =>{
            console.log("Se registro correctamente");
            console.log(response);
            sessionStorage.setItem("token",response);
            window.location = 'index.html';
        }).catch((err) => { 
            console.log(err);
        });

    });
}

document.addEventListener('DOMContentLoaded', () => {
    init_form();
});



/*document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('sign-in');

    form.addEventListener('submit',(e)=>{
        console.log('Evento submit',e);
        e.preventDefault();

        const first_name= document.getElementById("first_name").value;
        const last_name = document.getElementById("last_name").value;
        const email=document.getElementById("email").value;
        const password= document.getElementById("password").value;
        const direccion=document.getElementById
    })
})
*/
