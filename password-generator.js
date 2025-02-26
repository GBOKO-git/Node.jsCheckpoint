// Créer une fonction qui génère des mots de passe aléatoires et console.log() ce mot de passe.
const generator = require("generate-password");
const password = generator.generate({
  length: 10,
  numbers: true,
});

// 'uEyMTw32v9'
console.log(password);
