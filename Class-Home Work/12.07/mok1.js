function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

function generateArrayOfRandomNumbers(min, max, length=11) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(rand(min, max));
  }
  return arr;
}

const arr = generateArrayOfRandomNumbers(0, 10, 21);
console.log(arr);


const masyvas = [6, 2, 9, 5, 12];

let filterValue =masyvas.filter((num) =>{
    return num % 2 !== 0;});

    console.log(filterValue)

    
