/**
1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės
2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
7. Išrūšiuoti masyvą didėjančia tvarka;
8. Išrūšiuoti masyvą mažėjančia tvarka;
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
10. Apskaičiuoti visų skaičių vidurkį;
*/

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1.
const generateRandomNumber = (length, min, max) => {
    const arr = [];
    for(let i=0; i<length; i++)
        arr.push(rand(min, max));
    return arr;
    };

//2.    
const generateString = (length) => {
    let str = "";
    for(let i=0; i<length; i++){
        str += String.fromCharCode(rand(65, 90))
    }
    return str;
};

const stringArray = [];
for (let i=0; i<100; i++){
stringArray.push(generateString(4));
}
console.log(stringArray)

//3.
stringArray.sort();
console.log(stringArray)

//4.
stringArray.sort().reverse();
console.log(stringArray);

//5.
const numbersArray = generateRandomNumber(100, -100, 200);
console.log(numbersArray);

//6. patikrinimas ar yra
if (numbersArray.includes(68)){
    console.log(`68 yre numbersArray masyve`);
} else{
    console.log(`68 nėra numbersArray masyve`);
}

//7. rušiavimas didėjančia tvarka
numbersArray.sort((num1, num2)=>{
    return num1 - num2;
})
console.log(numbersArray)

//8.

numbersArray.reverse();
console.log(numbersArray);

//9.Min/Max
let min = Math.min(...numbersArray);
let max = Math.max(...numbersArray);

console.log("min: "+min,"max: "+ max)

//10. Vidurkis

console.log(numbersArray)

let sumArray = 0;

for (let i=0; i < numbersArray.length; i++){
    sumArray += numbersArray[i]; 
}
let avgArrays = sumArray / numbersArray.length;
console.log("numbersArrays skaičiu vidurkis: " + avgArrays)

