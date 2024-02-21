import { useState } from "react";

export default function Form2() {
    const [cats, setCats] = useState(getCatsFromLocalStorage);
    const [newCatName, setNewCatName] = useState("");
    const [weight, setWeight] = useState("");

    function getCatsFromLocalStorage() {
        return JSON.parse(localStorage.getItem("cats") || "[]");
    }

    return (
        <div className="Form2">
            <input
                type="text"
                placeholder="Vardas"
                value={newCatName}
                onChange={(e) => {
                    setNewCatName(e.target.value);
                }}
            />

            <input
                className="weightInput"
                type="number"
                placeholder="Svoris(kg)"
                value={weight}
                min={0}
                max={40}
                onChange={(e) => {
                    setWeight(e.target.value);
                }}
            />

            <button
                onClick={() => {
                    const newArray = [
                        ...cats,
                        {
                            name: newCatName,
                            weight: weight,
                        },
                    ];
                setCats(newArray);

                localStorage.setItem("cats", JSON.stringify(newArray));
                setNewCatName("");
                setWeight("");
                }}
            >
                Pridėti katinuka
            </button>

            <ul>
                {cats.map((cat, index) => (
                <li key={index}>
                    {cat.name} {cat.weight}kg
                </li>
                ))}
            </ul>
        </div>
    );
    }
