import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let item = 0;

  const [resultat, setResultat] = useState("");

  const afficherDans = (item) => {
    setResultat((resultat) => resultat + item.toString());
  };
  const effacerTout = () => {
    setResultat("");
  };

  const calculation = () => {
    console.log(eval(resultat));
    setResultat(eval(resultat));
  };

  const del = () => {
    setResultat(resultat.substring(0, resultat.length-1))
  }

  return (
    <>
      <h1>Calculatrice</h1>
      <Calculatrice
        resultat={resultat}
        afficherDans={afficherDans}
        effacerTout={effacerTout}
        calculation={calculation}
        del={del}
      ></Calculatrice>
    </>
  );
}

function Calculatrice({ resultat, afficherDans, effacerTout, calculation, del }) {
  return (
    <>
    <div className="tout">
      <div>
        <input type="text" value={resultat} />
      </div>
      <br />
      <div>
        <button onClick={() => afficherDans(".")}>.</button>
        <button onClick={() => effacerTout()}>ac</button>
        <button onClick={() => del()}>del</button>
        <button onClick={() => afficherDans("+")}>+</button>
      </div>
      <br />
      <div>
        <button onClick={() => afficherDans(7)}>7</button>
        <button onClick={() => afficherDans(8)}>8</button>
        <button onClick={() => afficherDans(9)}>9</button>
        <button onClick={() => afficherDans("/")}>/</button>
      </div>
      <br />
      <div>
        <button onClick={() => afficherDans(4)}>4</button>
        <button onClick={() => afficherDans(5)}>5</button>
        <button onClick={() => afficherDans(6)}>6</button>
        <button onClick={() => afficherDans("*")}>*</button>
      </div>
      <br />
      <div>
        <button onClick={() => afficherDans(1)}>1</button>
        <button onClick={() => afficherDans(2)}>2</button>
        <button onClick={() => afficherDans(3)}>3</button>
        <button onClick={() => afficherDans("-")}>-</button>
      </div>
      <br />
      <div>
      <button onClick={() => afficherDans("000")}>000</button>
      <button onClick={() => afficherDans("00")}>00</button>
      <button onClick={() => afficherDans(0)}>0</button>
        <button onClick={() => calculation()} className="egal">=</button>
      </div>
      </div>
    </>
  );
}
export default App;
