
// About us Number Animation 

document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter-number");
    const targetValue = 25;
    const duration = 2000; // duration in milliseconds
    let startTime = null;
  
    // Function to update the number smoothly
    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;  // Store the start time
  
      const progress = timestamp - startTime;  // Calculate progress
      const currentValue = Math.min(Math.floor(progress / duration * targetValue), targetValue);  // Calculate current value
  
      counter.textContent = currentValue;  // Update the text content of the counter
  
      if (progress < duration) {
        requestAnimationFrame(animateCounter);  // Continue animation
      } else {
        counter.textContent = targetValue;  // Ensure the value reaches the target value
      }
    }
  
    // Start the animation on page load
    requestAnimationFrame(animateCounter);
  });
  