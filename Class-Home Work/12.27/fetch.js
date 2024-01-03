
// Funkcija,  gauti ir rodyti atsitiktinę šuns nuotrauką
function fetchRandomDogImage(breed) {
  const apiUrl = breed
    ? `https://dog.ceo/api/breed/${breed}/images/random`
    : "https://dog.ceo/api/breeds/image/random";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dogPic = document.querySelector("#dogPic");
      dogPic.innerHTML = `<img src="${data.message}" alt="Dog Image"/>`;
    });
}

// Funkcija, skirta gauti ir užpildyti šunų veislių pasirinkimo sąrašą

function fetchDogBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dogBreeds = document.querySelector("#dogBreeds");
      const breeds = data.message;
      
      // sąrašo užpildymas veislėmis
      for (const breed in breeds) {
        const option = document.createElement("option");
        option.value = breed;
        option.text = breed;
        dogBreeds.appendChild(option);
      }

      // event listener šunų veislei

      dogBreeds.addEventListener("change", function () {
        const selectedBreed = this.value;
        fetchRandomDogImage(selectedBreed);
      });
    });
}


// rodyti atsitiktinę šuns nuotrauką
fetchRandomDogImage();


// veislių pasirinkimo sąrašas
fetchDogBreeds();
