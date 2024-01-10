const   coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
        categorySelectElement = document.querySelector("#category-select"),
        glassSelectElement = document.querySelector("#glass-type-select"),
        ingredientSelectElement = document.querySelector("#ingredient-select"),
        dynamicDrinksElement = document.querySelector(".drinks"),
        buttonSearch = document.querySelector("#search"),
        modal = document.querySelector(".modal-bg");

const selectValues = {},
      drinksArray = [];

async function fillSelectElements() {
  const allUrls = [
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  ];

  const allPromises = allUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  const allValues = await Promise.all(allPromises);

  const [allCategories, allGlasses, allIngredients] = allValues;

  selectValues.categories = allCategories.drinks.map(
    (categoryObj) => categoryObj.strCategory
  );
  selectValues.glasses = allGlasses.drinks.map((glass) => glass.strGlass);
  selectValues.ingredients = allIngredients.drinks.map(
    (ingredient) => ingredient.strIngredient1
  );

  fillCategorySelect(
    allCategories.drinks,
    categorySelectElement,
    "strCategory"
  );
  fillCategorySelect(allGlasses.drinks, glassSelectElement, "strGlass");
  fillCategorySelect(
    allIngredients.drinks,
    ingredientSelectElement,
    "strIngredient1"
  );
}

function fillCategorySelect(properties, selectElement, strFieldName) {
  let dynamicHTML = "";
  for (const property of properties) {
    dynamicHTML += `<option>${property[strFieldName]}</option>`;
  }
  selectElement.innerHTML += dynamicHTML;
}

async function getAllDrinks() {
  const categoryDrinksUrls = [];
  for (const category of selectValues.categories) {
    let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
    categoryDrinksUrls.push(dynamicUrl);
  }
  const allPromises = categoryDrinksUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  const allValues = await Promise.all(allPromises);
  allValues.forEach((value) => drinksArray.push(...value.drinks));
}

function generateDrinksHTML(drinks) {
  let dynamicHTML = "";

  for (let drink of drinks) {
    dynamicHTML += `<div class="drink" onclick="openModal(${drink.idDrink})">
		<img src="${drink.strDrinkThumb}" alt="drink"/>
		<h2 class="drink-title">${drink.strDrink}</h2>
	</div>`;
  }
  dynamicDrinksElement.innerHTML = dynamicHTML;
}

async function filter() {
  const searchValue = coctailNameFilterElement.value,
    category = categorySelectElement.value,
    glass = glassSelectElement.value,
    ingredient = ingredientSelectElement.value;
  let filteredArray = [...drinksArray];

  if (searchValue) {
    filteredArray = filteredArray.filter((drinkObj) =>
      drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase()));
  }

  if (category !== "Pasirinkite kategoriją") {
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`);
    const drinksOfCategory = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfCategory.drinks.some(
        (drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink));
  }

  if (glass !== "Pasirinkite stiklinės tipą") {
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(" ", "_")}`);
    const drinksOfGlass = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfGlass.drinks.some(
        (drinkOfGlass) => drink.idDrink === drinkOfGlass.idDrink));
  }

  if (ingredient !== "Pasirinkite ingridientą") {
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(" ", "_")}`);
    const drinksOfingredient = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfingredient.drinks.some(
        (drinksOfingredient) => drink.idDrink === drinksOfingredient.idDrink));
  }

  const alcoholType = document.querySelector("#alcohol-select").value;
  if (alcoholType === "Alcoholic") {
    const promise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
    const alcoholicDrinks = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      alcoholicDrinks.drinks.some((alcoholicDrink) => drink.idDrink === alcoholicDrink.idDrink));
  } else if (alcoholType === "Non-Alcoholic") {
    const promise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
    const nonAlcoholicDrinks = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      nonAlcoholicDrinks.drinks.some(
        (nonAlcoholicDrink) => drink.idDrink === nonAlcoholicDrink.idDrink));
      }
  generateDrinksHTML(filteredArray);
}
document.querySelector("#alcohol-select").addEventListener("change", filter);

async function initialization() {
  await fillSelectElements();
  await getAllDrinks();
  generateDrinksHTML(drinksArray);

  buttonSearch.addEventListener("click", filter);
}

//Modalinis langas
async function openModal(id) {
  modal.style.display = "flex";

  const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

  const response = await promise.json();
  const drink = response.drinks[0];
  document.querySelector(".modal-img").src = drink.strDrinkThumb;
  document.querySelector("#modal-category").innerText = drink.strCategory;
  document.querySelector("#modal-alcohol").innerText = drink.strAlcoholic;
}

function closeModal(event) {
  if (
    event.target === modal ||
    modal.contains(event.target) ||
    event.target.classList.contains("modal-close-button")
  ) {
    modal.style.display = "none";
  }
}

document.addEventListener("click", closeModal);

document.querySelector(".modal-close-button").onclick = closeModal;

initialization();

async function getRandomDrink() {
  const promise = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  const response = await promise.json();
  const randomDrink = response.drinks[0];

  modal.style.display = "flex";
  document.querySelector(".modal-img").src = randomDrink.strDrinkThumb;
  document.querySelector("#modal-category").innerText = randomDrink.strCategory;
  document.querySelector("#modal-alcohol").innerText = randomDrink.strAlcoholic;
}
document.querySelector("#im-lucky").addEventListener("click", getRandomDrink);

// Raidžių generavimas ir linku
function generateLetterLinks() {
    const lettersContainer = document.querySelector(".leters");
    
    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    alphabet.forEach(letter => {
        const letterLink = document.createElement("a");
        letterLink.href = `#letter-${letter}`;
        letterLink.textContent = letter;
        letterLink.addEventListener("click", (event) => {
            event.preventDefault();
            filterByLetter(letter);
        });
        
        lettersContainer.appendChild(letterLink);
    });
}
generateLetterLinks();

// Filtravimas pagal raides
async function filterByLetter(letter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    const response = await fetch(url);
    const data = await response.json();

    const drinks = data.drinks || [];


    generateDrinksHTML(drinks);
}