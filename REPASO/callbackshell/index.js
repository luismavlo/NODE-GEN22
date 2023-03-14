function saludar(nombre, callback) {
  console.log("Hola 😃 " + nombre);
  setTimeout(() => {
    console.log("Como estás?");
    setTimeout(() => {
      console.log("Nos vemos después");
      callback();
    }, 2000);
  }, 2000);
}

function despedir() {
  console.log("Adiós 🖐");
}

saludar("Max", despedir);
