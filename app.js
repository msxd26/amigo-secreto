// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

  console.log(amigos);

  if (!nombre) {
    alert("¡Inserte un nombre por favor!");
  }
  amigos.push(nombre);
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let lista = document.createElement("li");
    lista.textContent = amigos[i];
    listaAmigos.appendChild(lista);
  }

  limpiar();
}

function sortearAmigo() {
  let amigosecreto = "";

  if (amigos == 0) {
    alert("¡No hay ningun nombre registrado!");
  } else {
    if (amigos.length > 0) {
      let random = Math.floor(Math.random() * amigos.length);
      amigosecreto = amigos[random];
    }
  }
  let sorteo = document.getElementById("resultado");
  sorteo.innerHTML = amigosecreto;
}

function limpiar() {
  document.getElementById("amigo").value = "";
}
