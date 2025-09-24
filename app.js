const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  if (nombre === "") {
    // no permitir agregar cadenas vacías
    return;
  }

  listaAmigos.push(nombre);

  // mostrar en el <ul>
  ulListaAmigos.innerHTML += `<li>${nombre}</li>`;

  // limpiar el campo de entrada
  inputAmigo.value = "";
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    ulResultado.innerHTML = `<li>No hay amigos para sortear</li>`;
    return;
  }

  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];

  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
