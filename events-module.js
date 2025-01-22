const PizzaShop = require("./pizza-shop.js");
const DrinkMachine = require("./drink-machin.js");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
})

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order pizza", (size, topping) => {
//   console.log(`Baking a ${size} pizza with ${topping}`);
// })

// emitter.on("order pizza", (size) => {
//   if(size === "large") {
//     console.log("serving complimentary drink");
//   }
// })

// console.log("Do work before event occurs in the system");

// emitter.emit("order pizza", "large", "mushrooms");