// const crypto = require("node:crypto");
const https = require("node:https");

// process.env.UV_THREADPOOL_SIZE = 8;

const start = Date.now();

const MAX_CALL = 12;

for(let i = 0; i < MAX_CALL; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Hash ${i + 1}: ${Date.now() - start}`);
      });
    })
    .end();
  // crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, data) => {
    // console.log(`Hash ${i + 1}: ${Date.now() - start}`);
  // });
}

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log(`hash: ${Date.now() - start}`);