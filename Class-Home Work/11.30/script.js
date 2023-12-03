// && operatorius and (ir)
// || operatorius arba

let x=5;

if(x<10 && x >2){

}

if(x<10 || x >2 || y < 8){
    
}

function rand (min, max){
return Math.floor(Math.random() * (max-min +1)) +min;
}

let sk = rand(10, 100);
console.log(sk);

if(sk >= 20 && sk <= 50 && sk % 2 ===0){
    console.log("skaičius tinka 1 kategorijai")
}

console.log("---------------------------------------------")

// 1.  Salyga. Generuojamas skaičius tarp 0 ir 99;
 
// Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į
// Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją
// Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log()
 
// Kategorija 1: 0 <= skaičius <= 10 - pakelti skaičių kvadratu ir atspausdinti
// Kategorija 2: 10 < skaičius < 20 - atspausdinti skaičių tokį koks jis yra;
// Kategorija 3: 20 <= skaičius < 50  ir Skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
// Kategorija 4: 20 <= skaičius < 50  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
// Kategorija 5: 50 <= skaičius ir skaičius dalinasi iš 3 be liekanos:
// Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
 
// Rezultatas:
// Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
// PVZ: sugeneruotas skaičius: 28
// Skaičius - 28, Kategorija 3, operacijos rezultatas: 26


let sk2 = rand(0, 99);
console.log(sk2)
// operatorius **2 -pakelia laipsniu (skaičius nurodo kokiu laipsniu)


if (sk2 <= 10) {
    let rez = sk2 ** 2;
    console.log(`skaičius: ${sk2} \t Kategorija:1, \t Rezultatas: ${rez}`);
} 
else if (sk2 > 10 && sk2 < 20) {
    console.log(`skaičius: ${sk2} \t Kategorija:2`);
} 
else if (sk2 >= 20 && sk2 < 50 && sk2 % 2 ===0) {
    let rez2 = sk2 - Math.floor(sk2 / 10) *10; 
    console.log(`skaičius: ${sk2} \t Kategorija:3, \t Rezultatas: ${rez2}`);
}
else if (sk2 >= 20 && sk2 < 50 && sk2 % 2 !==0) {
    let rez3 = (sk2 + sk2%10) /2; 
    console.log(`skaičius: ${sk2} \t Kategorija:4, \t Rezultatas: ${rez3}`);
}
else if (sk2 >= 50 && sk2 % 3 ===0) {
    let rez4 = rand(97, 122); 
    console.log(
        `skaičius: ${sk2} \t Kategorija:5, \t Rezultatas: ${String.fromCharCode(rez4)+String.fromCharCode(rez4)+String.fromCharCode(rez4)+String.fromCharCode(rez4)}`);
}
else {
    console.log("skaičius netinkamas nei vienai kategorijai");
}

console.log("---------------------------------------------");

let a = b = c = 5
console.log(c)