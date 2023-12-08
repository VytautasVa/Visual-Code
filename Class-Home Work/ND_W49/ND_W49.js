function rand(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}

//a.Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytųsi ekrane;

let wrappedLineDiv = document.querySelector(".wrappedLine");
for (let i = 0; i < 100; i++) {
  wrappedLineDiv.innerHTML += " 😜 ";
}

//b. Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”;

let max50 = document.querySelector(".max50");

for (let i = 0; i < 400; i++) {
  max50.innerHTML += " 🥲 ";

  if ((i + 1) % 50 === 0) {
    max50.innerHTML += "<br>";
  }
}

// 1.Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas:
// <h3>3</h3>

let randNr = document.querySelector(".randNr");
let nrInTags = document.querySelector(".nrInTags")
let a = rand(1, 6);
randNr.innerHTML = a

if(a === 1){
    nrInTags.innerHTML = "<h1>" + a + "<h1>"; 
}
if(a === 2){
    nrInTags.innerHTML = "<h2>" + a + "<h2>"; 
}
if(a === 3){
    nrInTags.innerHTML = "<h3>" + a + "<h3>"; 
}
if(a === 4){
    nrInTags.innerHTML = "<h4>" + a + "<h4>"; 
}
if(a === 5){
    nrInTags.innerHTML = "<h5>" + a + "<h5>"; 
}
if(a === 6){
    nrInTags.innerHTML = "<h6>" + a + "<h6>"; 
}

//2.Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.

let colorNr = document.querySelector(".colorNr");
let b = []
for(let i=0; i<3; i++){
    b.push(rand(-10, 10));}

for (let i=0; i<b.length; i++){
    if(b[i] < 0){
        colorNr.innerHTML += `<span style="color: green; font-weight: bold;">${b[i]}</span> `;
    }
    else if(b[i] === 0 ){colorNr.innerHTML += `<span style="color: red;font-weight: bold;">${b[i]}</span> `;
    }
    else if (b[i] > 0) {colorNr.innerHTML += `<span style="color: blue; font-weight: bold;">${b[i]}</span> `;
    }
}
colorNr.innerHTML = b; 
console.log(b)
