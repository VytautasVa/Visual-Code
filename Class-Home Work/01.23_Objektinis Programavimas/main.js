// const objektas = {
//     //spalva - savybe; raudona - reiksme
//     spalva:"raudona",
//     sayHello(){
//         console.log("hello");
//     },
//     hello: ()=>{
//         console.log("hellos");
//     },
//     hi: function(){
//         console.log("hi");
//     },
// };

// objektas.hello();

class Person{
    // name;
    // height;
    // nationality = "Lithuanian";
    static countOfPeople = 0;
    constructor(name, height){
        this.name = name;
        this.height = height;
        this.nationality = "Lithuanian"
        Person.countOfPeople++
    }

    sayHello(){
        console.log(`Labas as ${this.name} `);
    }
    //Statinis metodas
    static countArea(height, width){
        console.log(height * width); 
    }
}

const petras = new Person("Petras", 1.87);
const egle = new Person("Egle", 1.71);
console.log(egle);
console.log(petras);


// petras.sayHello()
// Person.countArea(4, 5)
// Person.countOfPeople(4, 5)
// // console.log(Person.countOfPeople);