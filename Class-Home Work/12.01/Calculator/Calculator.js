function skaiciuoti() {
  let nr1 = document.querySelector("#nr1").value;
  let nr2 = document.querySelector("#nr2").value;
  let veiksmas = document.querySelector("#veiksmas").value;
  let rez = document.querySelector("#rez");
  if (nr1 !== "" && nr2 !== "")
   {
    if (!isNaN(nr1) && !isNaN(nr2) && veiksmas === "1") {
      rez.innerText = parseFloat(nr1) + parseFloat(nr2);

    } else if (!isNaN(nr1) && !isNaN(nr2) && veiksmas === "2") {
      rez.innerText = parseFloat(nr1) - parseFloat(nr2);

    } else if (!isNaN(nr1) && !isNaN(nr2) && veiksmas === "3") {
      rez.innerText = parseFloat(nr1) * parseFloat(nr2);

    } else if (!isNaN(nr1) && !isNaN(nr2) && veiksmas === "4") {
        if (nr2 !== 0) {
          rez.innerText = parseFloat(nr1) / parseFloat(nr2);
        } else {
          rez.innerText = `NE`;
        }

    } else if (!isNaN(nr1) && !isNaN(nr2) && veiksmas === "5") {
      rez.innerText = parseFloat(nr1) ** parseFloat(nr2);
      
    } else {
      rez.innerText = "Įveskite abu skaičius";
    }
  }
}
