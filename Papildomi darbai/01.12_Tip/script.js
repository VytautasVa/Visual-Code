const bill = document.getElementById("bill");
const service = document.getElementById("serviceRating");
const btn = document.getElementById("btn");
const tip = document.getElementById("tip");
const total = document.getElementById("total");


btn.addEventListener("click", calculate)
function calculate (){
    const billValue = bill.value
    const serviceValue = service.value

    if(!billValue){
        return alert("Įveskite sumą")
    }
    if(billValue <= 0){
        return alert ("Įveskite teigiama")
    }
    const tipValue = tipCalculate(billValue, serviceValue)

    const totalCost = +billValue + tipValue;

    tip.innerText = tipValue.toFixed(2);
    total.innerText = totalCost.toFixed(2);
    }

    

function tipCalculate (bill, selectValue){
    return bill * (selectValue/100)
}    



