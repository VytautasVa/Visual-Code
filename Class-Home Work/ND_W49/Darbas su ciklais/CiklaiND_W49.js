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

for (let i=0; i < b.length; i++){
    if(b[i] < 0){colorNr.innerHTML += `<span style="color: green; ">${b[i]}</span> `;
    }
    else if(b[i] === 0 ){colorNr.innerHTML += `<span style="color: red;">${b[i]}</span> `;
    }
    else if (b[i] > 0) {colorNr.innerHTML += `<span style="color: blue;">${b[i]}</span> `;
    }
}

//3.Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

let htmlTextElement = document.querySelector(".htmlText");
let text = [ "An American in Paris",
            "Breakfast at Tiffany's",
            "2001: A Space Odyssey",
            "It's a Wonderful Life"];

for (let i = 0; i < text.length; i++) {
    let modifiedText = text[i].replace(/[aeiouy]/gi, "");
    htmlTextElement.innerHTML += modifiedText + "<br>";
}

//4.Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.

let sk4 = [];
let numbers = document.querySelector(".numbers");
// let greater150 = document.querySelector(".greater150");
greater150 = 0;

for (let i = 0; i < 300; i++) {
    sk4.push(rand(0, 300));
    }
for (let i=0; i<sk4.length; i++){
    if(sk4[i] > 275){
        numbers.innerHTML += `<span style ="color:red;"> ${sk4[i]}</span>`;
    }
    else{numbers.innerHTML += `<span style ="color:black;"> ${sk4[i]}</span>`;}
}

for (let i = 0; i < sk4.length; i++) {
    let d = sk4[i];

    if (sk4[i] > 150) {
    greater150++;
    }
}
document.querySelector(".greater150").innerHTML ="Count of numbers greater than 150: " + greater150;
console.log("Numbers greater than 150: " + greater150);

//0?.Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

let textFrom3 = document.querySelector(".textFrom3");

for (let i = 0; i < text.length; i++) {
  let modifiedText = text[i].replace(/[^aeiouy]/gi, "");
  textFrom3.innerHTML += modifiedText + "<br>";
}

//5.Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.

let array = document.querySelector(".array");
let array3000 = [];

for (let i = 1; i <= 3000; i++) {
    array3000.push(i);
}
    for(let i=0; i < array3000.length; i++){
        if (array3000[i] % 77 === 0){
            array.innerHTML += array3000[i];
            
            if (array3000[i] < array3000.length - 1) {
                array.innerHTML += ", ";}
            }
    }

    array.innerHTML = array.innerHTML.slice(0, -2);

// let array = document.querySelector(".array");
// let array3000 = [];
// let divisibleBy77 = [];

// for (let i = 1; i <= 5000; i++) {
//     array3000.push(i);
// }
//     for(let i=0; i < array3000.length; i++){
//         if (array3000[i] % 77 === 0){
//             divisibleBy77.push(array3000[i])
//             }
//     }
//     array.innerHTML = `${divisibleBy77}`;


// 6.Duotas vardų masyvas, kuriame visi vardai prasideda mažąja raide. Reikia sukurti algoritmą, kuris visus vardus konvertuoja į iš didžiosios raidės prasidedančius vardus:

let names = document.querySelector(".names");
let namesArray = [
	'alice', 'bob', 'charlie', 'david', 'emily',
	'frank', 'grace', 'harry', 'isabella', 'jack',
	'kate', 'liam', 'molly', 'nathan', 'olivia',
	'peter', 'quinn', 'rachel', 'steve', 'tina'];

for (let i = 0; i < namesArray.length; i++) {
    let capitalizedName =
    namesArray[i].charAt(0).toUpperCase() + namesArray[i].slice(1);

    if (i === namesArray.length - 1) {
    names.innerHTML += capitalizedName;} 
    else {
    names.innerHTML += capitalizedName + ", ";
    }
}


