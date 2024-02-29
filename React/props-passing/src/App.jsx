import { useState } from "react";
import Komponentas1 from "./Komponentas1";
import Komponentas2 from "./Komponentas2";

export default function App() {
  const [vardas, setVardas] = useState("");
  const piniguKiekis = 500000;

  function gautiDuomenis(name){
    setVardas(name);
  }
  
  return(
    <div className="bg-yellow">
      <h1>Parent</h1>
      <p>Vardas: {vardas}</p>
      <Komponentas1 
        money={piniguKiekis} 
        perduotiDuomenis = {gautiDuomenis}
      />
      <Komponentas2 cash = {piniguKiekis} prizaLaimejo={vardas}/>
    </div>
)}
