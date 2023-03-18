const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file");
      resolve(`${data}`);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject(`Could not write file`);
      resolve("success");
    });
  });
};

const getPokemonPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/pokemon.txt`);

    const res1Promise = await superagent.get(
      `https://pokeapi.co/api/v2/pokemon/${data}`
    );
    const res2Promise = await superagent.get(
      `https://pokeapi.co/api/v2/pokemon/${data}`
    );
    const res3Promise = await superagent.get(
      `https://pokeapi.co/api/v2/pokemon/${data}`
    );

    const allPokemonsRes = await Promise.all([
      res1Promise,
      res2Promise,
      res3Promise,
    ]);

    const imgsPokemons = allPokemonsRes.map(
      (el) => el.body.sprites.back_default
    );

    await writeFilePro("pokemon-img.txt", imgsPokemons.join("\n"));
    console.log("Pokemon image saved to file!");
  } catch (error) {
    console.log(error);
  }
  return "2";
};

(async () => {
  try {
    console.log("1");
    const num = await getPokemonPic();
    console.log(num);
    console.log("3");
  } catch (error) {
    console.log(error);
  }
})();
