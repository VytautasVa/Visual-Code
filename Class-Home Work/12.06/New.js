function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

function generateArrayOfRandomNumbers() {
  let array = [];
  for (let i = 0; i < 20; i++) {
    array.push(rand(0, 10));}
  return array;
}

let arr = generateArrayOfRandomNumbers();

console.log(arr);
