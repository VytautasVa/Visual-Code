const   inputKg = document.getElementById("inputKg"),
        gender = document.getElementById("gender"),
        btn = document.getElementById("btn"),
        liter = document.getElementById("liter");

btn.addEventListener("click", calculate)

function calculate (){
    const weithValue = inputKg.value
    const genderValue = gender.value

    if(!weithValue){
        return alert("Įveskite svorį")
    }
    const literValue = literCalculate(weithValue, genderValue)

    liter.innerText = literValue.toFixed(2);

}

function literCalculate (inputKg, genderValue){
    return inputKg * genderValue
}

