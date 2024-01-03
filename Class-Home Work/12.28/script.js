//1. Gauname visas šunų veisles
//2. Atvaizduoti veisles select elemente per funkcija
//3. Sukurti šuns nuotraukų atvaizdavimo funkcija (atvaizduojama pagal veislę)
//3.1 Susikurti dinamini URL, tam kad kreiptis į šuns veislės nuotraukas
//3.2 Kreipiamės į serverį pagal dinaminį URL, norint gauti nuotraukas
//3.3 Kai gauname atsakymą dinamiškai generuoti HTML kodą.
//3.4 Sugeneruota kodą atvaizduoti elemente, kuriame turi atsirasti notrauka
//4. Pridėti event listenerį kuris keis nuotraukas pagal veislę.


const breedSelectElement = document.querySelector("#breeds-select");
const dynamicAlbumElement = document.querySelector("#photo-album");
const breedsArray = [];

//1.
fetch("https://dog.ceo/api/breeds/list/all")
.then((response) => response.json())
.then((response) => parseAllBreeds(response.message));
//2.
function parseAllBreeds(breeds) {
    let dynamicHTML = "";

    for(let breed in breeds){
        const subBreeds = breeds[breed];
        if(subBreeds.length === 0){
            dynamicHTML += `<option>${breed}</option>`;
            breedsArray.push(breed)
        }
        else{
            for(let subBreed of subBreeds){
                dynamicHTML += `<option>${subBreed} ${breed}</option>`
                breedsArray.push(`${subBreed} ${breed}`);
            }
        }
    }
    parseDogImages(breedsArray[0])
    breedSelectElement.innerHTML = dynamicHTML;
}

//3
function parseDogImages(breed){
    let dynamicURL = generateDynamicDogPhotosURL(breed);
    fetch(dynamicURL) //3.2
        .then((response) => response.json())
        .then((response) => console.log(response);)
}

function generateDynamicDogPhotosURL(breed){
    let breedSplitted = breed.split(" ");
    let breedSplittedReversed = breedSplitted.reverse();
    let finalBreed = breedSplittedReversed.join("/");
    let fullUrl = `https://dog.ceo/api/breed/${finalBreed}/images`;
    return fullUrl;
}