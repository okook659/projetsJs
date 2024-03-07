import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tache, setTache] = useState("");

  let [liste, setListe] = useState([]);

  return (
    <>
      <div className="tout">
        <h1>To-Do List</h1>
        <InputFieldAndButton
          liste={liste}
          setListe={setListe}
          tache={tache}
          setTache={setTache}
        ></InputFieldAndButton>
      </div>
    </>
  );
}

function InputFieldAndButton({ liste, setListe, tache, setTache }) {
  let [finie, setFinie] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const newListe = [...liste, { task: tache, completed: false }];
    setListe(newListe);
    setTache("");
  };

  const handleChange = (e) => {
    setTache(e.target.value);
  };

  const effacer = (index) => {
    const listeEff = [...liste.slice(0, index), ...liste.slice(index + 1)];
    setListe(listeEff);
    console.log(listeEff);
  };

  const finir = (index) => {
    const updatedListe = [...liste];
    updatedListe[index].completed = !updatedListe[index].completed;
    setListe(updatedListe);
  };

  return (
    <>
      <form>
        <input type="text" value={tache} onChange={handleChange} />
        <button className="ajouter" type="button" onClick={handleClick}>
          Ajouter
        </button>
      </form>
      <div className="taches">
        <ol>
          {liste.map((item, index) => (
            <li key={index} className={item.completed ? "completed" : ""}><p>
              {item.task}{" "}</p>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => finir(index)}
              ></input>{" "}
              <button onClick={() => effacer(index)} className="trash">
                <i className="bx bx-trash-alt"></i>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
