// console.log("hello  World");
// console.log("test");

// //modulio importavimas
// const subtract = require("./math").subtract;
// console.log(subtract(10, 5));

// const sum = require("./math").sum;
// console.log(sum(5,4));

// const daugyba = require("./multiplicatio")
// console.log(daugyba(5,5));


//gaunamas HTTP modulis
const http = require("http");

//Sukuriams serverio kintamasis
const server = http.createServer((req, res)=>{
if(req.url === "/"){
    res.write("Tai yra mano atsakymas");
    res.end()
}
});

//serveris paleižiamas ant porto 3000
server.listen(3000);
console.log("server 3000 is started");