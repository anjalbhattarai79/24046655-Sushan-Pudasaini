// Get the cart icon and the quantity text
var cartIcon = document.querySelector('.cart-icon');
// Create a new span element to display the quantity text
var quantityText = document.createElement('span');
// Initialize the quantity text with a value of 0
quantityText.textContent = '0';
// Append the quantity text to the cart icon element
cartIcon.appendChild(quantityText);

// Get the quantity input field
var quantityInput = document.getElementById('quantity');

// Update the quantity when "Add to Cart" is clicked
function addToCart() {
  // Get the name of the product being added to cart
  var watchName = document.querySelector('.product-details h1').textContent;
  // Get the quantity of the product being added to cart
  var quantityToAdd = parseInt(quantityInput.value);
  // Display an alert message to confirm the product has been added to cart
  alert(watchName + " added to cart! Quantity: " + quantityToAdd);
  // Get the current quantity displayed in the cart icon
  var currentQuantity = parseInt(quantityText.textContent);
  // Update the quantity displayed in the cart icon
  quantityText.textContent = currentQuantity + quantityToAdd;
}

// Add event listener to toggle the review form display
document.getElementById("write-review-btn").addEventListener("click", function () {
  // Get the review form element from the DOM
  const reviewForm = document.getElementById("review-form");
  // Toggle the display of the review form
  reviewForm.style.display = reviewForm.style.display === "none" || reviewForm.style.display === "" ? "block" : "none";
});




// Add event listener to handle the review submission
document.getElementById("submit-btn").addEventListener("click", function () {
  // Get the rating value from the rating input field
  const rating = document.getElementById("rating").value;
  // Get the review text from the review text input field
  const reviewText = document.getElementById("review-text").value;
  // Check if the review text is empty
  if (reviewText.trim() === "") {
    // If the review text is empty, display an alert message
    alert("Please enter your review before submitting.");
  } else {
    // If the review text is not empty, display a confirmation message
    alert(`Thank you for your review!\nRating: ${rating} stars\nReview: ${reviewText}`);
  }
});