// console.error('bloga žinutė');

let x=(10);
console.log(x);
// aritmetiniai operatoriai + - * / %(liekana pvz:10/3 liekana 1) 
x=x+0;

x= x % 3;

x += 5

console.log(x)

// x += " tekstas"

let loginisPatikrinimas = x < 5;

console.log(loginisPatikrinimas);
console.log(typeof loginisPatikrinimas);

if(loginisPatikrinimas){
  // tikrina duomenų tipą
  console.log(typeof x);
  console.log(x);
}
else{
    console.log('x yra mažesnis už 5')
}
// sulyginimas

let tekstas = "Labas"
if(tekstas === "Labas"){
  console.log("Tekstas yra Labas")
}
// else{
//   console.log('teksntas NERA Labas')
// }

if(tekstas !== "labas"){
  console.log("NE")
}

let skaicius = "5";

if (skaicius === 5) {       // lygina duomenu tipa
  console.log("Skaicius yra 5");
}
if(skaicius == 5){          // lygina reiksme netikrina duomenu tipo
  console.log("Skaicius yra 5")
}


let tiesa = "OK";
if(0){    //bet koks skaičius bus tiesa, išskyrus 0
  console.log(tiesa)  //bando atvaizduoti kintamaji "tiesa", jei neranda, meta error
}

let eilerastis = "lorem laorem aknmaslk kakkfkiskk"
console.log(eilerastis);
eilerastis += "😁   Prid4tas tekstas";
console.log(eilerastis);

let kintamasis = "CHICKEN";
                //0123456

console.log(kintamasis[0])
console.log(kintamasis[1])
console.log(kintamasis[2])
console.log(kintamasis[3])
console.log(kintamasis[4])
console.log(kintamasis[5])
console.log(kintamasis[6])


skaicius = 5;
skaicius += "a";
console.log(skaicius);





