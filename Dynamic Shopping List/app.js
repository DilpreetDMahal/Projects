// Initializing varibles to hold refrences to tags
const btn = document.querySelector("button");
const unorderedList = document.querySelector("ul");
const userInput = document.querySelector("input");


// Events for clicking and storing value
btn.addEventListener("click", (e) =>
{
    
    e.preventDefault();  // we use preventdefault() because button is inside the form and by default when we click, it refreshes
    let value = userInput.value;
     userInput.value= "";

    // Creating new Elements

    const listItem = document.createElement("li");
    const textSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(textSpan);
    listItem.appendChild(deleteBtn);

    textSpan.textContent = value;
    deleteBtn.textContent = "Delete";

    unorderedList.appendChild(listItem);

    deleteBtn.addEventListener("click", 
        () => listItem.remove()
    );

    deleteBtn.style.color = "black";

    userInput.focus();

});