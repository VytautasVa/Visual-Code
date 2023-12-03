let vardas = "john", pavarde = "Deppas"

let inicialai = vardas[0]+vardas[1]+pavarde[pavarde.length - 2]+pavarde[pavarde.length - 1];

console.log(inicialai);


let password = "ledinukas"

if (password.length > 8) {
  console.log("Slaptažodis tinkama");
} 
else {
  console.log("Slaptažodis per trumpas");
}

// let data = "2023-11-29"
// let menuo = data[5] + data[6];
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')
// if (menuo==='01')



let diena = 7;
if(diena===1){
    console.log("pirmadienis")
}
else if( diena === 2){
    console.log("antradienis");
}
else if( diena === 3){
    console.log("trečiadienis");
}
else if( diena === 4){
    console.log("ketvirtadienis");
}
else if( diena === 5){
    console.log("penktadienis");
}
else if( diena === 6){
    console.log("Šeštadienis");
}
else if( diena === 7){
    console.log("Sekmadienis");
}
else {console.log("Ne diena")};

if(diena <= 7 && diena >= 1){
  if (diena % 2 === 0) {
    console.log("diena yra lyginė");
  } else {
    console.log("diena yra nelyginė");
  }
}


let imone = "UAB \"Artaleka\"";
let imone2 = "MB\t\"Softo fabrikas\"";

console.log(imone)
console.log(imone2);

let imoniuSarasas = imone +'\n'+ imone2;
console.log(imoniuSarasas);

imoniuSarasas = '${imone}\n${imone2}';
console.log(imoniuSarasas);



//-----------------------------

//duomenu tipo keitimas

let skaiciausTekstas = "12.7";

//perseINT funkcija, gauna tik sveikuosius skaičius
skaicius = parseInt(skaiciausTekstas)
console.log (skaicius);

//unary operator:
skaicius = +skaiciausTekstas;
console.log(skaicius)

//
skaicius = Number(skaiciausTekstas)
console.log(skaicius)

//Math

let roundedSkaicius = Math.round(skaicius);
console.log(roundedSkaicius)

roundedSkaicius = Math.floor(skaicius);
console.log(roundedSkaicius);

// roundedSkaicius = Math.cell(skaicius);
console.log(roundedSkaicius);


console.log("-------Skaičiaus konvertavimas į tekstą--------");
//Skaičiaus konvertavimas į tekstą---------------------------------------

let skaiciusX = 5;
skaiciusX += "";
console.log(`typeof skaiciusX \t ${skaiciusX}`);


