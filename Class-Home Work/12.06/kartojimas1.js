function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

//A
let arr = [];

for(let i=0; i<20; i++){
    arr.push(rand(0, 10));
}

console.log(arr)

for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

//B

arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);

//C

arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3  === 0) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);

//D. Skaičius lygus savo indeksui

arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (i === arr[i]) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);

//E. Skaičius <5 arba >8

arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <5 || arr[i]>8) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);

//F. Skaičius nuo 2 iki 5

arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >=2 && arr[i] <= 5) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);

//G. kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)


arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  let nextElement;

  if(arr.length - 1 === i){
    nextElement = arr[0];
  }  
  else{
    nextElement = arr[i+1];
  }
  if (arr[i] + nextElement >= 10) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);


//H. kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)


arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(rand(0, 10));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  let nextElement;

  if(arr.length - 1 === i){
    nextElement = arr[0];
  }  
  else{
    nextElement = arr[i+1];
  }
  if ((arr[i] + nextElement) % 2 === 0) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);