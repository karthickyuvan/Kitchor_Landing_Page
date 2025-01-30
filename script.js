//-----------------------------------------------------------------Number Animation-1------------------------------------------------------

// About us Number Animation

document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById("counter-number");
  const targetValue = 25;
  const duration = 2000; // duration in milliseconds
  let startTime = null;

  // Function to update the number smoothly
  function animateCounter(timestamp) {
    if (!startTime) startTime = timestamp; // Store the start time

    const progress = timestamp - startTime; // Calculate progress
    const currentValue = Math.min(
      Math.floor((progress / duration) * targetValue),
      targetValue
    ); // Calculate current value

    counter.textContent = currentValue; // Update the text content of the counter

    if (progress < duration) {
      requestAnimationFrame(animateCounter); // Continue animation
    } else {
      counter.textContent = targetValue; // Ensure the value reaches the target value
    }
  }

  // Start the animation on page load
  requestAnimationFrame(animateCounter);
});

//-----------------------------------------------------------------Number Animation-2------------------------------------------------------

// Completed Projects Number Animation

// Function to animate numbers
function animateNumbers() {
  // We select all .number elements using documentquerySelectorAll('.number').
  const numbers = document.querySelectorAll(".number");

// Set the total duration for the animation in milliseconds (e.g., 2 seconds)
const totalDuration = 2000;

  //we loop through each number element using forEach() method...
  numbers.forEach((num) => {
    // Loop through each '.number' element
    const target = parseInt(num.getAttribute("data-target")); // Get the target number (from data-target attribute)
    let current = 0; //Start From 0

     // Calculate the number of increments (based on target number) per animation frame
     const increment = (totalDuration / target); // The amount of time per number increment


    // Function to increment the number
    const incrementNumber = () => {
      if (current < target) {
        current++; // Increment the current number by 1
        num.textContent = current; // Update the text content of the current '.number' element
        setTimeout(incrementNumber, increment); // Repeat the function after the calculated increment time
      } else {
        num.textContent == target; // Ensure the target number is set when the animation ends
      }
    };

    incrementNumber(); // Start the number animation for this element
  });
}
// Run the animation when the page loads
window.addEventListener('load', animateNumbers);