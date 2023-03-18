const fs = require("fs");

fs.readFile("saludo.txt", (err, data) => {
  console.log(`saludo: ${data}`);
});

console.log("Adios muchachos los quiero 😃");
