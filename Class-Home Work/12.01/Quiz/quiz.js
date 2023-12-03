function baigti(){
    let teisingiAtsakymai = 0;

    const answer1 = document.querySelector(
      'input[name="capital_of_France"]:checked'
    ).value;
    if (answer1 === "C) Paris") {
      teisingiAtsakymai++;
      document.getElementById("c1").innerText = "Teisingai";
    } else {
      document.getElementById("c1").innerText = "Neteisingai";
    }

     const answer2 = document.querySelector(
       'input[name="continents_on_Earth"]:checked'
     ).value;
     if (answer2 === "B) 7") {
       teisingiAtsakymai++;
       document.getElementById("b2").innerText = "Teisingai";
     } else {
       document.getElementById("b2").innerText = "Neteisingai";
     }

     const answer3 = document.querySelector(
       'input[name="Red_Planet"]:checked'
     ).value;
     if (answer3 === "A) Mars") {
       teisingiAtsakymai++;
       document.getElementById("a3").innerText = "Teisingai";
     } else {
       document.getElementById("a3").innerText = "Neteisingai";
     }

     const answer4 = document.querySelector(
       'input[name="breathe_out"]:checked'
     ).value;
     if (answer4 === "B) Carbon Dioxide") {
       teisingiAtsakymai++;
       document.getElementById("b4").innerText = "Teisingai";
     } else {
       document.getElementById("b4").innerText = "Neteisingai";
     }

     const answer5 = document.querySelector(
       'input[name="largest_mammal"]:checked'
     ).value;
     if (answer5 === "B) Blue Whale") {
       teisingiAtsakymai++;
       document.getElementById("b5").innerText = "Teisingai";
     } else {
       document.getElementById("b5").innerText = "Neteisingai";
     }

     document.getElementById(
       "rez"
     ).innerText = `Teisingai atsakyta: ${teisingiAtsakymai}`;
        
}