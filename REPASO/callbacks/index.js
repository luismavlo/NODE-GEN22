function saludar(nombre, callback) {
  console.log("Hola 😃 " + nombre);
  callback();
}

function despedir() {
  console.log("Adios Desde La Linea 7");
}

saludar("Juan Valdez", () => {
  console.log("Adios desde la linea 11 🖐");
});
