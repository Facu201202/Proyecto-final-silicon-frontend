const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// crea un objeto para el login default

let defaultUser = {
    user: 'user@gmail.com',
    pass: '12345'
}


function login(){
    let usuario = document.getElementById('email').value;
    let password = document.getElementById('password').value
    console.log(`El usuario es ${usuario} y la contraseña es ${password}`)

    if(usuario == "" && password == ""){
        alert("ingresar usuario y contraseña")
    }

    if(defaultUser.user == usuario && defaultUser.pass == password){
        location.href = "homepage.html"

    }else{
        alert("usuario o contraseña incorrecta")
    }

    let inputUser = document.getElementById('email').value;
    inputUser = "";

    let inputPass = document.getElementById('password').value;
    inputPass = "";
}





