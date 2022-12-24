function logar() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(username == "admin" && password == "admin") {
        //console.log("acessar página");
        location.href="http://127.0.0.1:5500/index.html";
    } else {
        alert("Usuário ou Senha incorretos");
    }
}

