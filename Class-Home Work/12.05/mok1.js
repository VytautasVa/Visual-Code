//fibonacci skaiciu seka

let fibonacci = [0, 1];

//Elemento idėjimas į masyvo vietą pagal indeksa
// fibonacci[2] = fibonacci[1]+fibonacci[0];

//elemento pridėjimas prie masyvo galo
// fibonacci.push(fibonacci[1] + fibonacci[0]);

for (let f = 2 ; f < 50; f++){
    // fibonacci[f] = fibonacci[f-1] + fibonacci[f-2];
    fibonacci.push(fibonacci[f-1]+fibonacci[f-2]);
}

//spausdinimas į konsolę
console.log(fibonacci);
//spausdinimas į ekraną
document.write(fibonacci+"<br>");

console.log('----------------------------------------------')
document.write("----------------------------------------------");


// masyvo su atsitiktinėm reikšmėm generavimas. 1000reikšmiu

function rand(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let atsitiktiniaiSkaiciai = [];

for(let i=0; i < 10; i++){

    let randomSkaicius = rand(0, 10);
    // atsitiktiniaiSkaiciai.push(randomSkaicius);
    atsitiktiniaiSkaiciai[i] = randomSkaicius;
}
console.log("Atsitiktinių skaičių masyvas: "+atsitiktiniaiSkaiciai);
document.write("<br> Atsitiktinių skaičių masyvas: "+"<br>" + atsitiktiniaiSkaiciai + "<br>");

console.log("----------------------------------------------");
document.write("---------------------------------------------- ");

// tik nelyginiai skaičiai. 

for(let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    console.log(i+1 + " apsisukimas: atsitiktiniaiSkaiciai[i] = "+atsitiktiniaiSkaiciai[i])

    if(atsitiktiniaiSkaiciai[i] % 2 !== 0){
        console.log(atsitiktiniaiSkaiciai[i]);
    }
    
}

console.log("----------------------------------------------");
document.write("<br> ----------------------------------------------");

console.log(atsitiktiniaiSkaiciai[0]);
console.log(atsitiktiniaiSkaiciai[1]);
console.log(atsitiktiniaiSkaiciai[2]);
console.log(atsitiktiniaiSkaiciai[3]);
console.log(atsitiktiniaiSkaiciai[4]);
console.log(atsitiktiniaiSkaiciai[5]);
console.log(atsitiktiniaiSkaiciai[6]);
console.log(atsitiktiniaiSkaiciai[7]);
console.log(atsitiktiniaiSkaiciai[8]);
console.log(atsitiktiniaiSkaiciai[9]);
console.log(atsitiktiniaiSkaiciai[10]);
console.log(atsitiktiniaiSkaiciai[11]);

for(let i = 0; i < atsitiktiniaiSkaiciai.length; i++){
    console.log(atsitiktiniaiSkaiciai[i]);
}
console.log(atsitiktiniaiSkaiciai)

console.log("----------------------------------------------");
document.write("<br> ----------------------------------------------");


//Suskaičiuoti kiek masyve elementų su reikšme:2


let countOfTwos = 0;

for( let i=0; i < atsitiktiniaiSkaiciai.length; i++){
    if(atsitiktiniaiSkaiciai[i] === 2){
        countOfTwos++
    }
}
console.log("su reikšme:2 yra: "+countOfTwos);
document.write("<br> su reikšme:2 yra: " + countOfTwos);

//Suskaičiuoti kiek masyve yra elementu mažesniu nei 5;

let less5 = 0;

for( let i=0; i<atsitiktiniaiSkaiciai.length; i++){
    if(atsitiktiniaiSkaiciai[i] < 5 ){
        less5++
    }
}
console.log("masyve skaičių mažesnių už 5 yra: " + less5)
document.write("<br> masyve skaičių mažesnių už 5 yra: " + less5 + "<br>");

console.log("----------------------------------------------");
document.write("<br> ----------------------------------------------");

// Suskaičiuoti kiek masyve yra elementu mažesniu nei 3 arba didesniu nei 7;

let number = 0;

for(let i=0; i < atsitiktiniaiSkaiciai.length; i++ ){
    if(atsitiktiniaiSkaiciai[i] < 3 || atsitiktiniaiSkaiciai[i] > 7){
        number++
    }
}
console.log("masyve skaičių mažesnių už 3 arba didesniu už 7 yra: "+ number);
document.write("<br> masyve skaičių mažesnių už 3 arba didesniu už 7 yra: " + number);

console.log("");
document.write("<br> ");

console.log("--------------------NEW masyvo operacijos--------------------------");
document.write("<br> -------------------NEW masyvo operacijos---------------------------<br>");

let naujasMasyvas = [8, 7, 3, 46, 9, 7];

//elemento pridėjimas prie masyvo
console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");

naujasMasyvas.push('😁');

console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");

console.log("-------elemento pašalinimas iš masyvo galo---------------------------------------");
document.write("<br> --------elemento pašalinimas iš masyvo galo--------------------------<br>");

//elemento pašalinimas iš masyvo galo

naujasMasyvas.pop();

console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");

console.log("-------elemento pašalinimas iš masyvo priekio---------------------------------------");
document.write("<br> --------elemento pašalinimas iš masyvo priekio--------------------------<br>");

naujasMasyvas.shift();
console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");

console.log("-------elemento pašalinimas iš masyvo pagal indeksa---------------------------------------");
document.write("<br> --------elemento pašalinimas iš masyvo pagal indeksa--------------------------<br>");

naujasMasyvas.splice( 2, 1 )
console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");

// jei iš galo naudoti su minusu
naujasMasyvas.splice(-1)
console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");

//elemento pridėjimas į priekį
console.log("-------elemento pridėjimas į priekį---------------------------------------");
document.write("<br> --------elemento pridėjimas į priekį--------------------------<br>");

naujasMasyvas.unshift("labas")
console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");

//Masyvo elementų atspausdinimas pasinaudojant delimiteriu
console.log("-------Masyvo elementų atspausdinimas pasinaudojant delimiteriu---------------------------------------");
document.write("<br> --------Masyvo elementų atspausdinimas pasinaudojant delimiteriu--------------------------<br>");


console.log(naujasMasyvas.join(" - "));
document.write(naujasMasyvas.join(" - "));

document.write(naujasMasyvas.join("<li></li>"))
console.log(naujasMasyvas.join(" 🤯 "));
document.write(naujasMasyvas.join(" 🙌 "));


//Masyvo apsukimas antraip
console.log("-------Masyvo apsukimas antraip---------------------------------------");
document.write("<br> --------Masyvo apsukimas antraip--------------------------<br>");

naujasMasyvas.reverse();
console.log(naujasMasyvas);
document.write(naujasMasyvas + "<br>");


//Užduotis: išfiltruoti iš masyvo visus skaičius, kurie dalinasi iš 2;
console.log("-------Užduotis: išfiltruoti iš masyvo visus skaičius, kurie dalinasi iš 2;--------");
document.write("<br> -----Užduotis: išfiltruoti iš masyvo visus skaičius, kurie dalinasi iš 2;--<br>");

let naujesnisMasyvas = [];
for(let i=0; i<100; i++){
    let nr = rand(0, 20); 
    naujesnisMasyvas[i] = nr;
}

console.log(naujesnisMasyvas);
document.write(naujesnisMasyvas + "<br>");

for (let i=0; i < naujesnisMasyvas.length; i++){
    if(naujesnisMasyvas[i] % 2 === 0){
        naujesnisMasyvas.splice(i, 1);
        i--;
    }
}
console.log( naujesnisMasyvas.join(", "));
document.write( naujesnisMasyvas.join(", ")+"<br>");



