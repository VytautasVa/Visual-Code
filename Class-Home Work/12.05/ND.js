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

//------------------------------------------------------------------------------------
//2.----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");
document.write("-------------------------------------------------------------- <br>");

console.log(masyvasB.join("⇒"));
document.write(masyvasB.join("⇒"));

console.log("----------------------------------------------------------------------");
document.write("-------------------------------------------------------------- <br>");
//3.iš f masyvo ištrinkite elementus kurie:-------------------------------------------
//3a. pašalinti lyginius--------------------------------------------------------------

let mas = []
for(let i=0; i<20; i++){
    mas.push(rand(0, 10));}
console.log(mas)

for (let i = 0; i < 20; i++){
  if (mas[i] % 2 === 0) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

//3b. pašalinti nelyginius--------------------------------------------------------------

mas = [];
for (let i = 0; i < 20; i++) {
  mas.push(rand(0, 10));
}
console.log(mas);

for (let i = 0; i < 20; i++) {
  if (mas[i] % 2 !== 0) {
    mas.splice(i, 1);
    i--;
  }
}
console.log(mas);

  // if(masyvasF[i] % 2 !== 0){
  //c
  // if(masyvasF[i] % 3 ===0){
  //d
  // if(masyvasF[i] = ){
  //e
  // if(masyvasF[i]<5 || masyvasF[i]>8){
  //f
  // if(masyvasF[i]<=2 && masyvasF[i]<5){
  //g
  // if(masyvasF[i]+masyvasF[i+1] > 9){
  //h
//   if (masyvasF[i] + (masyvasF[i + 1] % 2) === 0) {
//     masyvasF.splice(i, 1);
//     i--;
//   }
// }
// console.log("masyvasF : " + masyvasF);
// document.write("<br> masyvasF : " + masyvasF +"<br>" );

//---------------------------------------------------



//---------------------------------------------------
