const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

if(cluster.isMaster){
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`worker ${process.pid} started`);
  
  const server = http.createServer((req, res) => {
    if(req.url === "/") {
      res.writeHead(200, {"Conten-Type": "text/plain"});
      res.end("Home Page");
    } else if (req.url === "/slow-page") {
      setTimeout(() => {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Slow Page");
      }, 5000);
    }
  });
  
  server.listen(8000, () => { console.log("Page is running on port 8000")});
}

