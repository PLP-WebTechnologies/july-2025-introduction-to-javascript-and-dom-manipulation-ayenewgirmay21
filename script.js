// ==========================
// Part 1: Variables & Conditionals
// ==========================

// Variable declarations
let age = 20;
let ageMessage = "";

// Conditional logic
if (age >= 18) {
    ageMessage = "You are an adult.";
} else {
    ageMessage = "You are a minor.";
}

// Display result in the DOM
document.getElementById("ageMessage").innerText = ageMessage;


// ==========================
// Part 2: Functions
// ==========================

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}
document.getElementById("totalPrice").innerText = calculateTotal(50, 3); // 150

// Function 2: Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
document.getElementById("reversedText").innerText = reverseString("JavaScript"); // tpircSavaJ


// ==========================
// Part 3: Loops
// ==========================

// Loop 1: For loop to display numbers 1-5
let numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = `Number ${i}`;
    numberList.appendChild(li);
}

// Loop 2: ForEach loop to display fruits
let fruits = ["Apple", "Banana", "Cherry"];
let fruitsList = document.getElementById("fruitsList");
fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.innerText = fruit;
    fruitsList.appendChild(li);
});


// ==========================
// Part 4: DOM Interactions
// ==========================

// DOM Interaction 1: Toggle class on button click
let toggleButton = document.getElementById("toggleButton");
let toggleText = document.getElementById("toggleText");
toggleButton.addEventListener("click", function() {
    toggleText.classList.toggle("highlight");
});

// DOM Interaction 2: Add new item to list on button click
let addItemButton = document.getElementById("addItemButton");
let dynamicList = document.getElementById("dynamicList");
let itemCount = 1;
addItemButton.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = `Dynamic Item ${itemCount}`;
    dynamicList.appendChild(li);
    itemCount++;
});

// DOM Interaction 3: Change button text dynamically
addItemButton.addEventListener("mouseover", function() {
    addItemButton.innerText = "Click to Add Item!";
});
addItemButton.addEventListener("mouseout", function() {
    addItemButton.innerText = "Add Item";
});
