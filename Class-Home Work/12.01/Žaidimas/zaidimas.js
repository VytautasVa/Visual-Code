function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

let atsitiktinisSkaicius = rand(1, 20), 
    spejimuSkaicius = 6;

console.log(atsitiktinisSkaicius);

function guessNumber() {
  let bandymas = document.querySelector("#guess");
  let Rezultatas = document.querySelector("#rez");
  let Skaiciavimas = document.querySelector("#spejimu-skaicius");

  if (spejimuSkaicius === 0) {
    Rezultatas.innerText = `Spėjimų skaičius baigėsi, bandykite iš naujo`;
    return;
  }

  spejimuSkaicius--;
  Skaiciavimas.innerText = spejimuSkaicius;
  let inputValue = bandymas.value;

  if (inputValue > atsitiktinisSkaicius) {
    Rezultatas.innerText = `Spėjimas buvo neteisingas, skaičius yra mažesnis`;
  } 
  else if (inputValue < atsitiktinisSkaicius) {
    Rezultatas. innerText = `Spėjimas buvo neteisingas, skaičius yra didesnis`;
  } 
  else {
    Rezultatas.innerText = `Teisingas spėjimas. Po ${6 - spejimuSkaicius } bandymų`;
  }
}

