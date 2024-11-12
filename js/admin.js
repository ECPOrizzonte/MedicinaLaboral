function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "usuario" && password === "contraseña"){
        document.getElementById("message").textContent = "¡Bienvenido, " + username + "!";
    }else{
        document.getElementById("message").textContent = "Usuario o contraseña incorrectos.";
    }
}