const deadButton  = document.querySelector('.dropbtn')

deadButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action (navigation)
});


const originalBackgroundColor = "#9e303e";  
const updateColor="#631e27";


const submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('mouseenter', function() {
  submitButton.style.backgroundColor = updateColor; // Change background on hover
});

// Add event listener for mouseleave (when the mouse leaves the button)
submitButton.addEventListener('mouseleave', function() {
  submitButton.style.backgroundColor = originalBackgroundColor; // Revert background when mouse leaves
});
