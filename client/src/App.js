import "./App.css";
import { useState } from "react";
//Axios est une bibliothèque JavaScript populaire utilisée pour effectuer
//des requêtes HTTP depuis un navigateur ou depuis Node.js.
//Pour importer Axios il faut faire npm install axios du coté client
import Axios from "axios";

function App() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState(0);
  const [pays, setPays] = useState("");
  const [position, setPostion] = useState("");
  const [salaire, setSalaire] = useState(0);

  /*Confirmation que les infos font bien l'utilisation de USESTATE
  const afficherInfo = () => {
    console.log("nom: "+ nom + " age: " + age + " pays: "+ pays  + " position: "+ position + " salaire: " + salaire)
  };*/

  //Methode pour ajouter un employer a la base de donnée.
  //Il faut ajouter la methode dans le onClick du boutton
  const ajouterEmployer = () => {
    console.log(nom)
    //La methode Axios.post prend comme argument le route pour la creation
    //Prend aussi comme argument le body, sois lorsqu'on fait par exemple : req.body.nom 
    Axios.post("http://localhost:3001/create", {
      nom: nom,
      age: age,
      pays: pays,
      position: position,
      salaire: salaire,
      //permet de savoir si les donné on bien été envoyé
    }).then(()=>{
      console.log("confirmé")
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Nom:</label>
        <input
          type="text"
          onChange={(event) => {
            setNom(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Pays:</label>
        <input
          type="text"
          onChange={(event) => {
            setPays(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPostion(event.target.value);
          }}
        />
        <label>Salaire (annuel):</label>
        <input
          type="number"
          onChange={(event) => {
            setSalaire(event.target.value);
          }}
        />
        <button onClick={ajouterEmployer}>Ajouter l'employer</button>
      </div>
    </div>
  );
}

export default App;
