const swapCase = require("swap-case").swapCase;

function greet(name) {
  console.log(swapCase(`Hello ${name}, welcome to Codevolution`));
};

greet("Mohamed");
module.exports = greet;