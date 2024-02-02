// Get the root element
let root = document.getElementById("root");

// Create the h1 element using DOM APIs
let h1 = document.createElement("h1");

// Insert the text into the h1 element
h1.innerHTML = "Hello world! from JavaScript";

// Append the h1 element to the root element
root.appendChild(h1);
