const allUrls1 = [
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",],
    allUrls2 = [
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",],
    allUrls3 = [
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon_vodka",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sherry",];

//sinchroninė funkcija
function fetchData(){
    const startTime = new Date();
    fetch(allUrls2[0])
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        const endTime = new Date();
        const duration =endTime.getTime() - startTime.getTime();
        console.log("function - " + duration + "ms");
    });
}  

//Asinchroninė funkcija

async function fetchDataAsync(){
    const startTime = new Date();
    const reqest = await fetch(allUrls2[1]);
    const drinks = await reqest.json();
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log("async - " + duration + "ms");
    console.log(drinks);
}

// fetchData();
// fetchDataAsync();


async function fetchAllDataByIngredient(urls){
    for (const url of urls){
        const promise = await fetch(url);
        const answer = await promise.json();
        console.log(answer);
    }
}

async function fetchAllDataIngredient(urls){
    const promises = urls.map((url)=>
        fetch(url).then((response) => response.json()))
        const dataFromAllSources = await Promise.all(promises);
        console.log(dataFromAllSources);
}
fetchAllDataIngredient(allUrls2)
// fetchAllDataByIngredient(allUrls1)