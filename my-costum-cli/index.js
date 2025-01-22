#!/usr/bin/env node

// const yargs = require("yargs");

// const {argv} = yargs(process.argv);

const inquirer = require("inquirer");

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({move}) => move.name);
  console.log(moves.slice(0, 5));
}

const prompt = inquirer.createPromptModule();
prompt([{
  type: "input",
  name: "pokemon",
  message: "Enter a pokemon name to view its first five moves"
}]).then((answers) => {
  const pokemon = answers.pokemon;
  printFiveMoves(pokemon);
})
