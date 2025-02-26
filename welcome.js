const fileSystem = require("fs");
const http = require("http");
const port = 3000;

// creer mon serveur

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world!");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Dans un premier temps, demander au système de fichiers de créer un fichier nommé "welcome.txt" contenant une ligne "Hello Node".
// Créer le fichier

fileSystem.writeFile("welcome.txt", "hello node!", () => {
  console.log("File created successfully.");
});

// Dans un deuxième temps, créer un programme qui lit et console.log les données de hello.txt
fileSystem.readFile("hello.txt", "utf8", (error, data) => {
  if (error) {
    console.log(`Error`);
  }
  console.log(data);
});
