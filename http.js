const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {

  const superhero = {
    firstName: "Bruce",
    lastName: "Wayne"
  };
  
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(superhero));
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }

  // const name = "Mohamed";

  // res.writeHead(200, { "Content-Type": "text/html" });
  // // fs.createReadStream(__dirname + "/index.html").pipe(res);
  // let html = fs.readFileSync("./index.html", "utf-8");
  // html = html.replace("{{name}}", name);
  // res.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});