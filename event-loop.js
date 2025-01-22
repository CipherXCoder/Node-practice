const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("close log 1");
});

setTimeout(() => console.log("setTimeOut log 1"), 0);
setImmediate(() => console.log("setImmediate log inside readFile"));
process.nextTick(() => console.log("nextTick log1"));
Promise.resolve().then(() => console.log("Promise log 1"));


// fs.readFile(__filename, () => {
//   console.log("readFile log 1")
//   setImmediate(() => console.log("setImmediate log inside readFile"));
//   process.nextTick(() => console.log("nextTick log inside readFile"));
//   Promise.resolve().then(() => console.log("Promise log inside readFile"));
// });

// process.nextTick(() => console.log("nextTick log 1"));
// Promise.resolve().then(() => console.log("Promise log 1"));

// setTimeout(() => console.log("setTimeOut log 1"));

  // setImmediate(() => console.log("setImmediate log 1"));
  // setImmediate(() => {
  //   console.log("setImmediate log 2");
  //   process.nextTick(() => console.log("nextTick log inside setImmediate"));
  //   Promise.resolve().then(() => console.log("Promise log inside setImmediate"));
  // });
  // setImmediate(() => console.log("setImmediate log 3"));


// console.log("console log 1");

// setTimeout(() => console.log("console log from setTomeOut 1"), 0);
// setTimeout(() => {
//   console.log("console log from setTomeOut 2");
//   process.nextTick(() => console.log("Inner nextTick log from 2nd setTimeOut"));
// }, 0);
// setTimeout(() => console.log("console log from setTomeOut 3"), 0);

// console.log("console log 2");

// process.nextTick(() => console.log("nextTick log 1"));
// process.nextTick(() => {
//   console.log("nextTick log 2");
//   process.nextTick(() => console.log("Inner nextTick log from 2nd nextTick"));
// });
// process.nextTick(() => console.log("nextTick log 3"));

// console.log("console log 3");

// Promise.resolve().then(() => console.log("Promise log 1"));
// Promise.resolve().then(() => {
//   console.log("Promise log 2");
//   process.nextTick(() => console.log("Inner nextTick log from 2nd Promise"));
// });
// Promise.resolve().then(() => console.log("Promise log 3"));

// console.log("console log last");
