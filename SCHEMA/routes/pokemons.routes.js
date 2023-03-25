const express = require('express');

const pokemonsController = require('./../controllers/pokemon.controller');

const router = express.Router();

router
  .route('/')
  .get(pokemonsController.findAllPokemon)
  .post(pokemonsController.createPokemon);

router
  .route('/:id')
  .get(pokemonsController.findOnePokemon)
  .patch(pokemonsController.updatePokemon)
  .delete(pokemonsController.deletePokemon);

module.exports = router;
