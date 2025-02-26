const http = require("http");
const port = 3000;
// créer un serveur
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(`<h1> Hello world !!! </h1>`);
});
// Écrire un programme qui s'exécute sur le port 3000 et répond avec  '<h1>Hello Node !!!!</h1>\n' lorsque quelqu'un atteint http://localhost:3000
server.listen(port, () => {
  console.log(`Server is running on port ${port}`); // afficher le numéro de port sur lequel le serveur est lancé
});
