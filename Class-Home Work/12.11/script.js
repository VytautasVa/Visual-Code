function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Darbas su masyvais
// 1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// 2. Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
// 3. Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// 4. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
// 5. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
// 6. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
// 7. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.

const generateArrayOfStrings = (length) => {
    const arr = [];
    for(let i=0; i<length; i++){
        let atsitiktineRaide = String.fromCharCode(rand(65, 68));
        arr.push(atsitiktineRaide);
    }
    return arr;
};

//1 užd.

const charactersArray = generateArrayOfStrings(200);
console.log(charactersArray);

//2 užd.

charactersArray.sort();
console.log(charactersArray);

//3 užd.

const   arr1 =    generateArrayOfStrings(200),
        arr2 =    generateArrayOfStrings(200),
        arr3 =    generateArrayOfStrings(200),
        sumArray = [], 
        uniqueValues = [];
        superUniqueValues = [];
        

for( let index in arr1){
    sumArray[index] = arr1[index] + arr2[index] + arr3[index]; 
    // sumArray[index] = arr1[index].concat(arr2[index], arr3[index]);
}

for( const value of sumArray){
    if(!uniqueValues.includes(value)){
        uniqueValues.push(value);
    }
}
console.log(sumArray);

// let superUniqueCombinations = 0;

for(let value of sumArray){
    let countOfThisCombination = 0; 
    for(let value2 of sumArray){
        if(value === value2){
            countOfThisCombination++
        }
    }
    if(countOfThisCombination === 1){
        // superUniqueCombinations++;
        superUniqueValues.push(value);
    }

}

console.log(superUniqueValues);
console.log("Iš viso unikalių reikšmių: " + superUniqueValues.length);


//4 užd.

function generateUniqueArray(length, min, max){
        const arr = [];
        while(arr.length < length){
        let randomNumber = rand(min, max);
        if(!arr.includes(randomNumber))arr.push(randomNumber);}
        return arr;
        }


const   array1 = generateUniqueArray(100, 100, 999), 
        array2 = generateUniqueArray(100, 100, 999);

        console.log('Masyvas 1:')
        console.log(array1)
        console.log('Masyvas 2:')
        console.log(array2)


// while(array1.length < 100){
//     let randomNumber = rand(100, 999);
//     if(!array1.includes(randomNumber)){
//         array1.push(randomNumber);
//     }
// }
// while(array2.length < 100){
//     let randomNumber = rand(100, 999);
//     if(!array2.includes(randomNumber)){
//         array2.push(randomNumber);
//     }
// }

//5 užd.

const fifhArray = [];
 for (let index in arr1){
    if (arr1[index] !== arr2[index]){
        fifhArray.push(arr1[index])
    }
 }

 console.log(fifhArray);


 //6 užd.

const newArray = [];
 for(let value of array1){
    if(array2.includes(value)){
        newArray.push(value);
    }
 }
console.log(newArray)

//7 užd.

const newArray2 = [];
let i = 0;
for(let index of array1){
    newArray2[index] = array2[i];
    i++
}

console.log(newArray2)