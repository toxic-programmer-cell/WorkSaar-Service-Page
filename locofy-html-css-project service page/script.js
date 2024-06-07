// Get all elements
const elements = document.querySelectorAll(".element");

// Clone the elements to create an infinite loop
const clonedElements = [];
elements.forEach(element => {
  const clone = element.cloneNode(true);
  clonedElements.push(clone);
});

// Add the cloned elements to the end of the original list
elements.forEach((element, index) => {
  element.parentNode.appendChild(clonedElements[index]);
});

// Add animation class to make them move right to left in a loop
elements.forEach(element => {
  element.classList.add('move-right-to-left');
});