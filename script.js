const button = document.querySelector('.main-btn');

const originalBackgroundColor = "#9e303e";  
const updateColor="#631e27";

// Add event listener for mouseenter (when the mouse hovers over the button)

button.addEventListener('mouseenter', function() {
  button.style.backgroundColor = updateColor;
 // Change background on hover
});

// Add event listener for mouseleave (when the mouse leaves the button)
button.addEventListener('mouseleave', function() {
  button.style.backgroundColor = originalBackgroundColor;
  // Revert background when mouse leaves
});

const deadButton  = document.querySelector('.dropbtn')

deadButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action (navigation)
});