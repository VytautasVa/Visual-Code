console.log("hello  World");
console.log("test");

//modulio importavimas
const subtract = require("./math").subtract;
console.log(subtract(10, 5));

const sum = require("./math").sum;
console.log(sum(5,4));

const daugyba = require("./multiplicatio")
console.log(daugyba(5,5));