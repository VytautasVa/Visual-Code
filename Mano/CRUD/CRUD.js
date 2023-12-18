// Get references to HTML elements
const createButton = document.getElementById("createButton");
const readButton = document.getElementById("readButton");
const updateButton = document.getElementById("updateButton");
const deleteButton = document.getElementById("deleteButton");
const textContainer = document.getElementById("text");

// Event listener for the CREATE button
createButton.addEventListener("click", function () {
  // Set the text content to a predefined value (Lorem ipsum)
  textContainer.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
});

// Event listener for the UPDATE button
updateButton.addEventListener("click", function () {
  // Create an input element
  const input = document.createElement("input");

  // Create a button to update the text
  const updateTextButton = document.createElement("button");
  updateTextButton.innerText = "Update Text";

  // Event listener for the button to update the text
  updateTextButton.addEventListener("click", function () {
    // Set the text content to the value entered in the input
    textContainer.innerText = input.value;

    // Remove the input and update button
    input.remove();
    updateTextButton.remove();
  });

  // Clear the text container and add the input and update button
  textContainer.innerHTML = "";
  textContainer.appendChild(input);
  textContainer.appendChild(updateTextButton);
});

// Event listener for the DELETE button
deleteButton.addEventListener("click", function () {
  // Clear the text content
  textContainer.innerText = "";
});

// Additional functionality for the READ button can be added if needed
