import { Fragment, useState } from "react";
const title = "Bonjour les gens!";
const style = { color: "blue", fontFamily: "Cambria" };
const showTitle = false;
const todos = [
  'Présenter React',
  'Présenter le JSX',
  'Créer des composants'
]
function App() {

  const [isTermAccepted, setIsTermAccepted] = useState(false)

  return (
    <form>
     <CUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
      <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
   </form>
  );
}

function CUCheckbox ({checked, onCheck}){
  return <div>
    <label>
      <input 
      type="checkbox" 
      onChange = {(e) => onCheck(e.target.checked)}
      checked={checked} />
      Accepter les conditions d'Utilisation
    </label>
  </div>
}

export default App;
