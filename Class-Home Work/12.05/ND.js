function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

//1a. Sukurkite masyvą iš 20 elementų:Kurių reikšmės: 0, 1, 2 …, 18 ,19;--------------

let masyvasA = [];
for (let i = 0; i < 20; i++) {
    masyvasA.push(i);
}

console.log("masyvasA: " + masyvasA);
document.write("masyvasA: " + masyvasA+"<br>")

//1b.Sukurkite masyvą iš 20 elementų:Kurių reikšmės: 1,2 3, … ,19, 20;----------------

let masyvasB = [];
for (let i=1; i<=20; i++){
    masyvasB.push(i);
    }

console.log("masyvasB: " + masyvasB);
document.write("masyvasB: " + masyvasB + "<br>")

//1c.Sukurkite masyvą iš 20 elementų: Kurių reikšmės: 19, 18 … 2, 1, 0----------------

let masyvasC = [];
for (let i=0; i<20; i++){
    masyvasC.push(i);
}
masyvasC.reverse();
console.log("masyvasC: " + masyvasC);
document.write("masyvasC: " + masyvasC + "<br>");

//1d.Sukurkite masyvą iš 20 elementų: Kurių reikšmės: 20, 21, 22…. 38, 39..-----------
let masyvasD = [];
for (let i=20; i<40; i++){
    masyvasD.push(i)
}
console.log("masyvasD: " + masyvasD);
document.write("masyvasD: " + masyvasD + "<br>");

//1e.Sukurkite masyvą iš 20 elementų: Kurių reikšmės: 49, 48, 47…. 31, 30-------------

let masyvasE = [];
for (let i = 30; i < 50; i++) {
    masyvasE.push(i);
}
masyvasE.reverse();
masyvasE.splice(-2);
// masyvasE.pop(), masyvasE.pop(); 
masyvasE.push("<red>31</red>, <red>30</red>")

console.log("masyvasE: " + masyvasE);
document.write("masyvasE: " + masyvasE + "<br>");

//1f.Sukurkite masyvą iš 20 elementų: Su atsitiktinėmis reikšmėmis nuo 0 iki 10-------

let masyvasF = [];
for (let i=0; i<20; i++){
    let nr = rand(0, 10);
    masyvasF[i] = nr;
}
console.log("masyvasF: "+masyvasF);
document.write("masyvasF: " +masyvasF+"<br>");

//-------------------------------------------------------------------------
//2.-----------------------------------------------------------------------
console.log("-----------------------------------------------------------");
document.write("--------------------------------------------------- <br>");

console.log(masyvasB.join("⇒"));
document.write(masyvasB.join("⇒"));

console.log("-----------------------------------------------------------");
document.write("<br> ---------------------------------------------- <br>");
//3.iš f masyvo ištrinkite elementus kurie:--------------------------------
//3a. pašalinti lyginius---------------------------------------------------

let mas = []
for(let i=0; i<20; i++){
    mas.push(rand(0, 10));}
console.log(mas)

for (let i = 0; i < mas.length; i++){
  if (mas[i] % 2 === 0) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3b. pašalinti nelyginius--------------------------------------------------

mas = [];
for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}
console.log(mas);

for (let i = 0; i < mas.length; i++) {
  if (mas[i] % 2 !== 0) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3c. pašalinti skaičius kurie dalinasi iš 3--------------------------------------------

mas = [];
for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}
console.log(mas);

for (let i = 0; i < mas.length; i++) {
  if (mas[i] % 3 === 0) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3d. pašalinti skaičius kurie yra lygūs savo indeksui----------------------------------

mas = [];
for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}
console.log(mas);

for (let i = 0; i < mas.length; i++) {
  if (i === mas[i] ){
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3e. pašalinti skaičius kurie yra mažesni nei 5 arba didesni nei 8---------------------

mas = [];
for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}
console.log(mas);

for (let i = 0; i < mas.length; i++) {
  if (mas[i]<5 || mas[i]>8) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3f. pašalinti skaičius kurie yra yra  nuo 2 iki 5-------------------------------------

mas = [];
for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}
console.log(mas);

for (let i = 0; i < mas.length; i++) {
  if (mas[i] >=2 && mas[i] <=5) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3g. pašalinti skaičius kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)

mas = [];

for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}

console.log(mas);

for (let i = 0; i < mas.length; i++) {
  let nextElement;

  if (mas.length - 1 === i) {
    nextElement = mas[0];
  } else {
    nextElement = mas[i + 1];
  }
  if (mas[i] + nextElement >= 10) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3h. pašalinti skaičius kurių suma su sekančiu elementu masyve yra lyginė-----------------------

mas = [];

for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}

console.log(mas);

for (let i = 0; i < mas.length; i++) {
  let nextElement;

  if (mas.length - 1 === i) {
    nextElement = mas[0];
  } else {
    nextElement = mas[i + 1];
  }
  if ((mas[i] + nextElement) % 2 === 0) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

console.log("----------------------------------------------------------------------");
document.write("-------------------------------------------------------------- <br>");
//4.Sukurkite atsitiktinio stringo iš 15 lotyniškų mažųjų raidžių generavimo algoritmą. Pasinaudokite String.fromCharCode(skaicius) funkcija, kad sugeneruoti atsitiktinę raidę

let randString = [];
for (let i=0; i < 15; i++){
  randString.push(String.fromCharCode(rand(97, 122)));
}
console.log(randString);
document.write(randString);

console.log("----------------------------------------------------------------------");
document.write("<br>---------------------------------------------------------- <br>");
//5.Sukurti masyvą iš 100 atsitiktinių skaičių. Prieš pridėdami elementą prie masyvo patikrinkite  ar skaičius yra nuo 40 iki 60. Jei taip, jo nepridėkite prie masyvo. Galiausiai masyvas turi turėti 100 elementų

let array = [];

for (let i = 0; i < 100; i++) {
  let random = Math.floor(Math.random() * 101);
  if (random >= 40 && random <= 60) {
    i--;
  } else {
    array.push(random);
  }
}
document.write(array.join("\n") + "</br>");


console.log("----------------------------------------------------------------------");
document.write("<br>---------------------------------------------------------- <br>");
//6.Pasinaudojant document.write() funkcija išveskite lyginius 5 uždavinio masyvo skaičius su spalva - žalia, o nelyginius su spalva - raudona;

function outputEvenOddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      document.write(
        '<span style="color: green;">' + arr[i] + "</span>&nbsp;" + "\n"
      );
    } else {
      document.write(
        '<span style="color: red;">' + arr[i] + "</span>&nbsp;" + "\n"
      );
    }
  }
}
outputEvenOddNumbers(array);


console.log("----------------------------------------------------------------------");
document.write("<br>---------------------------------------------------------- <br>");
//7.Sugeneruokite 80 atsitiktinių skaičių nuo 8 iki 32. Apskaičiuokite visų šių skaičių vidurkį.

let avarr = [];
let average;
let sum;
for (let i = 0; i < 80; i++) {
  let randomNr = Math.floor(Math.random() * 32) + 8;
  avarr.push(randomNr);
  document.write(randomNr + ", ");
}
sum = avarr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
average = sum / avarr.length;
document.write(
  "</br>" + '<span style="color: red;"> ' + average + " </span>&nbsp;" + "\n"
);


