        //---while loop

// let i=0;

// while (i<= 100) {
//     console.log(i);
//     i+=10;}

        //----------------

// const colours = ['Red','Blue','Green','Orange','Purple'];

// let colour = 0;

// while(colour < colours.length){
//     console.log(`${colours[colour]}`);
//     colour++;}

        //----do while loop-----------

// let b = 0;

// do{
//     console.log(`The number is ${b}`);
//     b++ ;}
//     while (b <= 10);

        //----------------------

// let zmones = ["petras","kazys", "Jonas", "Justinas", "Juratė", "Kastytis", "Antanas" ];
// let c = 0;

// while(c < zmones.length) {
//     console.log(zmones[c].toUpperCase());
//     c++;
// }

            
            //----------------Atspausdinti kas antra skaičiu. lgini nelygini----
            
// for (let indeksas = 0; indeksas < 10; indeksas++){
//     if (indeksas % 2 === 0) {
//         console.log(indeksas);
//     }
            
// }

//----------Atspausdinti kas ketvirta sk.-------

// for(let indeksas = 0; indeksas < 100; indeksas +=4){
//     console.log(indeksas)
// }

//----------Žvaigždučių piešimas, išvedimas į ekraną-------

// for (let indeksas = 0; indeksas < 10; indeksas++)
//         document.write("**********<br>");


//----------------

let n = 100;
let simbolis = `<black>*</black>`, redSimbolis = `<red>*</red>`, blueSimbolis = `<blue>*</blue>`
for (let indeksas = 0; indeksas < n; indeksas++) {
  let eilute = "" + redSimbolis + redSimbolis + simbolis + blueSimbolis;
  eilute += "<br>";
  document.write(eilute)
}