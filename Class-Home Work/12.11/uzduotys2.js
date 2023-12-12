
/**
1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė;
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti didėjančia tvarka.
6. Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abecelę didėjančia tvarka
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS;
9. Išrikiuokite masyvą priešinga nei abecelės tvarka
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
 */

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

//1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z

const generateRandomStrings = (strLength) => {
    let str = "";
    for (let i = 0; i < strLength; i++) {
        str += String.fromCharCode(rand(65, 90));
    }
    return str;}

const randStringsArray = (arrLength, strLength) => {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr.push(generateRandomStrings(strLength));
    }
    return arr;
};
// console.log(randStringsArray(10, 5));

//2.Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė;

const x = randStringsArray(300, 4)
console.log(x)

const findStrings = [];

for (let i=0; i<x.length; i++){
    const str = x[i];
    if (str.length > 0 && str[0] === "A" && str[str.length - 1] === "A"){
        console.log(findStrings.push({ indeksas: i, Reikšmė: str }));
    }
}
if (findStrings.length > 0) {
    console.log('Stringas su pirma ir paskutine "A":', findStrings);
} else {
    console.log('Tokių nėra');
}

console.log("----------------3---------------------------------------")
//3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'

const stringsByFirstLeter = [];

for(let i=0; i<x.length; i++){
    const  str = x[i];
    if(str[0] === "X" || str[0] === "M" || str[0] === "K"){
        stringsByFirstLeter.push(x[i]);
    }
}
console.log(stringsByFirstLeter)

console.log("----------------4---------------------------------------")
//4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;

const stringsByMiddle = [];

for(let i=0; i<x.length; i++){
    const str = x[i];
    const middleIndex = Math.floor(str.length / 2)

    if(str[middleIndex] === str[middleIndex-1]){
        stringsByMiddle.push(x[i]);
    }
}
console.log(stringsByMiddle)

console.log("----------------5---------------------------------------");
//5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti didėjančia tvarka.

if(stringsByMiddle.length >= 3) stringsByMiddle.sort();
else stringsByMiddle.sort().reverse();
console.log(stringsByMiddle);

console.log("----------------6---------------------------------------");
//6. Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;

const stringXAndLetter = [];
for(let value of x){
    stringXAndLetter.push(value + generateRandomStrings(1));
}
console.log(stringXAndLetter)


console.log("----------------7---------------------------------------");
//7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abecelę didėjančia tvarka

const xAbc = x.map((value) => value.split("").sort().join(""));
console.log(xAbc)

console.log("----------------8---------------------------------------");
//8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS;

const arrayXMAS = [];
let countTillXMAS = 0;

while(true){
    if(generateRandomStrings(4) === "XMAS"){
        arrayXMAS.push(generateRandomStrings(4));
        break;
    }
    else{
        arrayXMAS.push(generateRandomStrings(4));
        countTillXMAS++;
    }
}
console.log(arrayXMAS);
console.log(countTillXMAS);

console.log("----------------9---------------------------------------");
//9. Išrikiuokite masyvą priešinga nei abecelės tvarka

arrayXMAS.sort().reverse();
console.log(arrayXMAS);

console.log("----------------9---------------------------------------");
//10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'

const findXMAS = [];

for (let i = 0; i < arrayXMAS.length; i++) {
    const str = arrayXMAS[i];
    if(str === "XMAS"){
        findXMAS.push({ indeksas: i, Reikšmė: str})
    }
}
console.log(findXMAS)

