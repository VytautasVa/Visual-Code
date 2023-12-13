function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
let randLetter1 = document.querySelector(".randLetter1")
let rand1 = [];

function generateArrayOfRandLetters(length, LetterIndexMin, LetterIndexMax) {
    let result = [];
    for (let i = 0; i < length; i++) {
        let randomCharCode = rand(LetterIndexMin, LetterIndexMax);
        let randomLetter = String.fromCharCode(randomCharCode);
        result.push(randomLetter);
    }
    return result;
}

// for (let i=0; i<200; i++){
//     let randomCharCode = rand(65, 68);
//     let randomLetter = String.fromCharCode(randomCharCode);
//     // rand1 += randomLetter + " ";}  Šitaip netinka nes pakeičia stringa
//     rand1.push(randomLetter)
// }

    rand1 = generateArrayOfRandLetters(200, 65, 68)
    randLetter1.innerHTML = rand1 

let A = 0; B = 0; C = 0; D = 0;
    
    for(let i=0; i<rand1.length; i++){
        if(rand1[i] === "A"){
            A++;
        }
        else if (rand1[i] === "B"){
            B++;
        }
        else if (rand1[i] === "C"){
            C++;
        }
        else if (rand1[i] === "D"){
            D++;
        }
    }

    randLetter1.innerHTML = `${rand1} <br>Čia yra:<br>
    <li>${A} A raidės</li>
    <li>${B} B raidės</li>
    <li>${C} C raidės</li>
    <li>${D} D raidės</li>`;


// 2.Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
const randLetterSort = document.querySelector(".randLetterSort");

rand1.sort();

randLetterSort.innerHTML = `${rand1}`


// 3.	Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
    
arrOne = generateArrayOfRandLetters(200, 65, 68);
arrTwo = generateArrayOfRandLetters(200, 65, 68);
arrThree = generateArrayOfRandLetters(200, 65, 68);

// console.log(arrOne);
// console.log(arrTwo);
// console.log(arrThree);

const arrSum = document.querySelector(".arrSum");
const uniqArr = document.querySelector(".uniqArr");

const IndexSum = [];
for(let i=0; i < arrOne.length; i++){
    IndexSum.push(arrOne[i] + arrTwo[i] + arrThree[i]);
}
console.log(IndexSum);
arrSum.innerHTML = IndexSum;



    
// 4.Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
    

    
// 5.Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
    

    
// 6.Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
    

    
// 7.Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.