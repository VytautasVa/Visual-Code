function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

// Skaičiaus/Simbolio atvaizdavimas-------------------------

let a = [2];

let b = [2, 5, 9, 10, 50, 7];

let c = [];
for (let i = 0; i < 10; i++) {
    c.push(i);}

let d = [];
for (let i = 0; i < 10; i++) {
    d.push(rand(0, 10));}

let e = rand(0, 100);

let f = String.fromCharCode(100);

let g = String.fromCharCode(rand(97, 122), " ", rand(65, 90));

let h = [];
for (let i = 0; i < 100; i++) {
    let randomCharCode = rand(97, 122);
    let randomLetter = String.fromCharCode(randomCharCode);
    h += randomLetter;
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// Masyvo operacijos-----------------------------------------

let newTest = [5, 7, 10, 9, 1, 0, 3, 15, 7]

//pridėjimas iš galo
newTest.push("😁");
console.log(newTest)

//pridėjimas iš priekio
newTest.unshift("🚀");
console.log(newTest);

//pašalinimas iš galo
newTest.pop()
console.log(newTest);

//pašalinimas iš priekio
newTest.shift();
console.log(newTest);

//pašalinimas pagal indeksą. (pozicija, kiekŠalinti)
newTest.splice(4, 1);
console.log(newTest);

//delimiterių įterpimas
console.log(newTest.join("⇒"));

//Masyvo apsukimas
newTest.reverse();
console.log(newTest)


// Masyvo operacijos-----------------------------------------
