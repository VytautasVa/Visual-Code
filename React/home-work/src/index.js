import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Base1 from "./base1";
import Base2 from "./base2";
import Base3 from "./base3";
import Base4 from "./base4";
import Base5 from "./base5";
import Form1 from "./Form1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Base1 />
    <Base2
      atributas1="Tekstas"
      atributas2={4}
      atributas3={true}
      atributas4={new Date()}
      atributas5={() => console.log("Anonimine funkcija")}
      atributas6={["vienas", "du", "trys"]}
      atributas7={{ name: "Vytautas", age: 38 }}
      atributas8={
        class Zmogus {
          constructor(name, surname) {
            this.name = name;
            this.surname = surname;
          }
        }
      }
      atributas9={<Base1 />}
    />
    <Base3 mode={1}/>
    <Base4 
      text1="tekstas vienas"
      text2="tekstas DU"/>
    <Base5 text1="kitas tekstas" text2="dar kitas tekstas" color = "orange" />  
    <Form1/>
  </React.StrictMode>
);
