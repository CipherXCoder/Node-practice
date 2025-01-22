const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Contet-Type": "text/plain"});
  res.end("Hello world!");
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server running on port ${port}`));