/* eslint-disable react/prop-types */
export default function Komponentas1({money, perduotiDuomenis}){
    const vardas = "Vytautas";
    
    return (
        <div className="bg-orange">
            <h3>Komponentas1</h3>
            <p>Pinigu kiekis: {money}  </p>
            <button onClick={() => perduotiDuomenis(vardas)}>issiusti duomenis</button>
        </div>)
}