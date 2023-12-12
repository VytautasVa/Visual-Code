const arr= [1,4, 8, 9 , -5, "Petras"];
console.log(typeof arr);


const obj = {
    color:'red',
    name: "Petras",
}

console.log(obj.color);


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 36,
    nationality: "British",
    isMarried: false,
    kids: ["Sara", "Boston"],
};

console.log(
  `Hello, my name is ${person.firstName} ${person.lastName}, my age is ${person.age}, I am ${person.nationality} and my kids are ${person.kids.join(", ")}. And I am ${person.isMarried ? "Married" : "Not married"}`
);


//Tuščio objekto sukūrimas

const gyvunas = {}
console.log(gyvunas)

gyvunas.animalType = "Liutas";
console.log(gyvunas);

let laukas = "animalType"
console.log(gyvunas[laukas])
console.log(gyvunas["animalType"])
console.log(gyvunas.animalType);

gyvunas.occupation = "valdyti";

console.log(gyvunas)


const dog = {};

dog.breed = "German Shepard"
dog.name = "Angela"
dog.age = 7
dog.color = ["brown", "black"];

console.log(dog);

//dinaminis savybiu paėmimas:

for (let property in dog){
    console.log(`${property}: ${dog[property]}`)
}


const people = [
    {   
        firstName: 'Laura',
        lastName: 'Gonzales',
        age: 25,
        nationality: 'Iraq'
        isMarried: false,},

        {
        firstName: 'Saulius',
        lastName: 'Krėvė',
        age: 38,
        nationality: 'Lithuanian'
        isMarried: false}
        {
        firstName: 'John',
        lastName: 'Schmit',
        age: 39,
        nationality: 'Canada'
        isMarried: -}
];

//Kreipimasis į objektą

console.log(people[1].firstName, people[1].lastName);