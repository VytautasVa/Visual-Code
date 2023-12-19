const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector("#add-button");

function validateName(name){
    let isValid = true;
    if(!name){
        isValid = false;
    }
    if(!/[a-z][A-Z]/.test(name)){
        isValid = false;
    }
    return isValid;
}
buttonElement.addEventListener("click", () => {
    const person = {};
    person.firstName = document.getElementById("firstNameInput").value;
    person.lastName = document.getElementById("lastNameInput").value;
    person.age = document.getElementById("ageInput").value;
    person.nationality = document.getElementById("nationalityInput").value;
    person.number = currentNumeration;

    currentNumeration++
    // console.log(person)

    people.push(person)

    //Save to localStorage
    localStorage.setItem("people", JSON.stringify(people));

    generateTableContent(people);
});

const storedPeople = localStorage.getItem("people");
if (storedPeople) {
    people.push(...JSON.parse(storedPeople));
    generateTableContent(people);
}

function generateTableContent(people){
    let dynamicHTML = "";
    for (let person of people){
        dynamicHTML +=
        `<tr>
        <td> ${person.number}</td>
        <td> ${person.firstName}</td>
        <td> ${person.lastName}</td>
        <td> ${person.age}</td>
        <td> ${person.nationality}</td>
        </tr>`;
    }
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = dynamicHTML;
}

const buttonElement2 = document.querySelector("#remove-button");

buttonElement2.addEventListener("click", () =>{
    const lineNumberToRemove = document.getElementById("removeNrInput").value;

    //patikrinimas ar ne tuščia
    if(lineNumberToRemove.trim() === ""){
        alert("įveskite eilutės numerį");
        return;
    }

    // Parse the input as an integer
    const lineNumber = parseInt(lineNumberToRemove);

    // Check if the input is a valid number and within the range of existing lines
    if (!isNaN(lineNumber) && lineNumber > 0 && lineNumber <= people.length) {
        // Remove the line from the array based on the user's input
        people.splice(lineNumber - 1, 1);

        // Re-generate the table content
        generateTableContent(people);
    } else {
        alert("Tokios eilutės numerio nėra");
    }
});
