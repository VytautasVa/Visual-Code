
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

//1.

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

//2.
let x = randStringsArray(300, 3)
console.log(x)

let foundStrings = [];

for (let i=0; i<x.length; i++){
    const str = x[i];
    if (str.length > 0 && str[0] === "A" && str[str.length - 1] === "A"){
        console.log(foundStrings.push({ index: i, value: str }));
    }
}
if (foundStrings.length > 0) {
    console.log('Stringas su pirma ir paskutine "A":', foundStrings);
} else {
    console.log('Tokių nėra');
}

//3.



