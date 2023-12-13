const   height = document.querySelector(".height"),
        weight = document.querySelector(".weight"),
        calculate = document.querySelector(".btn"),
        result = document.querySelector(".result"),
        reset = document.querySelector(".reset");
        
calculate.addEventListener("click", calBMI);  
reset.addEventListener("click", resetForm);      

function calBMI(e){
    e.preventDefault()

    let heightValue = height.value;
    let weightValue = weight.value;

    if (!heightValue || isNaN(heightValue)) {
        return (result.innerHTML = "Provide a valid height");
    } 
    else if (!weightValue || isNaN(weightValue)) {
        return result.innerHTML = "Provide a valid weight";
    } 
    else {  let heightInMeters = heightValue / 100;

            let bmi = (weightValue / Math.pow(heightInMeters, 2)).toFixed(2);
            
    
        if(bmi < 18.5){
            showResult(`Underweight: <span> ${bmi}</span>`, "orange")
        }
        if(bmi > 18.5 && bmi < 25){
            showResult(`Normal: <span> ${bmi}</span>`, "green");
        }
        if(bmi > 25 && bmi < 30){
            showResult(`OverWeight: <span> ${bmi}</span>`, "yellow");
        }
        if(bmi > 30){
            showResult(`Obese: <span> ${bmi}</span>`, "red");
        }
        reset.classList.remove("reset");
    }
}
function showResult(value, color){
    result.style.backgroundColor = color;
    return result.innerHTML = value
}

function resetForm() {
    height.value = "";
    weight.value = "";
    result.style.backgroundColor = "rgb(77, 77, 180)";
    result.innerHTML = "";
    reset.classList.add("reset");
}


