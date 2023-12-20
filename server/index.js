// Set up un serveur express
const express = require("express");
//Creation de l'application
const app = express();
//Importation de MySQL
const mysql = require("mysql");
//Faire un npm install du coté serveur
//Les navigateurs appliquent une politique de sécurité Same-Origin Policy (Politique de même origine) par défaut. 
//Cela signifie qu'une page web ne peut pas directement effectuer de requêtes vers un autre domaine que celui dont elle provient. 
//CORS est une norme qui permet de lever cette restriction en permettant à un serveur de spécifier via des en-têtes HTTP quels domaines ou ressources externes sont autorisés à accéder à ses ressources.
const cors = require('cors')
app.use(cors());

//La ligne de code app.use(express.json()); est utilisée dans une application Node.js avec le framework Express. Cette ligne est une méthode middleware d'Express qui permet à votre application Express de traiter les données reçues en tant que JSON.
app.use(express.json());
//Variable utilisé pour faire les appel a la base de donné (ex: delete, add etc)
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Beausejour33",
  database: "systemeemployer",
});

//Inserer donné dans la base de donnée 'systemeemployer'
//req c'est pour prendre les informations du frontend
//res c'est pour envoyer a la base de donné
app.post("/create", (req, res) => {
  console.log(req.body)
  //Les données qu'on vas envoyer dans la base de donné
  const nom = req.body.nom;
  const age = req.body.age;
  const pays = req.body.pays;
  const position = req.body.position;
  const salaire = req.body.salaire;

  //Inserer les données dans la base de donnée. On utilise les point d'exclamation pour la securité lors de l'insertion
  //Les informations passé dans le tableau vont prendre la place des point d'interogation
  db.query(
    "INSERT INTO employer (nom , age, pays, position, salaire) VALUES (?,?,?,?,?)",
    [nom, age, pays, position, salaire],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valeur envoyer");
      }
    }
  );
});

//Commencer l'application
app.listen(3001, () => {
  console.log("L'application est en marche sur le port 3001");
});
