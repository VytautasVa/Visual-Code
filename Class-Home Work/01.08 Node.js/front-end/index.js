async function callToServer(){
    const promise = await fetch("http://localhost3000/");
    const response = await promise.text();
    console.log(response);
}

callToServer()