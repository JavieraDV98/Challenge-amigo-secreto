let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    var input = document.getElementById('amigo');
    var nombre = input.value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Validar si el nombre ya existe
    for (var i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i] === nombre) {
            alert("Ese nombre ya está en la lista.");
            return;
        }
    }
    listaAmigos[listaAmigos.length] = nombre;
    mostrarListaAmigos();
    input.value = "";
}

function mostrarListaAmigos() {
    var lista = "";
    for (var i = 0; i < listaAmigos.length; i++) {
        lista = lista + "<li>" + listaAmigos[i] + "</li>";
    }
    document.getElementById("listaAmigos").innerHTML = lista;
}

mostrarListaAmigos();

function sortearAmigo() {
    if(listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
            return;
    }
    var indice = Math.floor(Math.random() * listaAmigos.length);
    var ganador = listaAmigos[indice];
    alert("El amigo sorteado es: "+ ganador);
}