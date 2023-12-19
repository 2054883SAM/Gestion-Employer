import "./App.css";
import { useState } from "react";

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
        <button>Ajouter l'employer</button>
      </div>
    </div>
  );
}

export default App;
