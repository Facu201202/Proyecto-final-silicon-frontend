const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// lista de usuarios y funcion para traer los valores de los imput
let userList = [];

const data = () => {
    nameRegister = document.getElementById("nameRegister").value;
    emailRegister = document.getElementById("emailRegister").value;
    passwordRegister = document.getElementById("passwordRegister").value;
    formRegister = document.getElementById("formRegister");
}

//funcion para guarda en local storage el nuevo usuario

const register = () => {

    data();

    let user = {
        nameRegister,
        emailRegister,
        passwordRegister
    }

    userList.push(user);

    localStorage.setItem("Usuarios", JSON.stringify(userList));  

    console.log(userList);
    formRegister.reset();
}



// crea un objeto para el login default

let defaultUser = {
    user: 'user@gmail.com',
    pass: '12345'
}


//validar el login con usuario default o nuevo usuario de local storage

function login() {

    //datos del local storage

    let usuarios = localStorage.getItem("Usuarios");
    usuarios = JSON.parse(usuarios);


    //datos del imput login

    let usuario = document.getElementById('email').value;
    let password = document.getElementById('password').value

    console.log(`El usuario es ${usuario} y la contraseña es ${password}`)

    let error;
    let vacio;

    //validacion del login

    if (usuario == "" && password == "") {
        alert("ingresar usuario y contraseña")

    }

    if(defaultUser.user == usuario && defaultUser.pass == password) {
        location.href = "homepage.html"
        error = true;
    }
    
    if (usuarios != null){
        for(i = 0; i <usuarios.length; i++){
            if(usuarios[i].emailRegister == usuario && usuarios[i].passwordRegister == password){
                location.href = "homepage.html"
                error = true;
            }
        }
    }
    if(error != true){
        alert("usuario o contraseña incorrecta");
    }

    let inputUser = document.getElementById('email').value;
    inputUser = "";

    let inputPass = document.getElementById('password').value;
    inputPass = "";
}
