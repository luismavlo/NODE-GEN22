function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function saludar(nombre) {
  console.log("Hola 😃 " + nombre);
  await esperar(2000);
  console.log("Como estás?");
}

function despedir() {
  console.log("Adiós");
}

const saludarYDespedir = async (nombre) => {
  try {
    await saludar(nombre);
    console.log("Nos vemos después");
    despedir();
  } catch (error) {
    console.log(error);
  }
};

saludarYDespedir("Derian");
