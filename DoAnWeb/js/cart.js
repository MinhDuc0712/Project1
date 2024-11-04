document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll("#cartItems .list-group-item");
    const totalPriceElement = document.getElementById("totalPrice");
  
    // Function to calculate total price
    function calculateTotalPrice() {
      let totalPrice = 0;
      cartItems.forEach(function(item) {
        const priceString = item.querySelector(".product-price").innerText;
        const price = parseInt(priceString.replace(/\D/g, ""));
        const quantity = parseInt(item.querySelector(".quantity").innerText);
        totalPrice += price * quantity;
      });
      totalPriceElement.innerText = totalPrice.toLocaleString() + "₫";
    }
  
    // Function to handle increase and decrease quantity buttons
    function handleQuantityButtons() {
      cartItems.forEach(function(item) {
        const decreaseButton = item.querySelector(".btn-decrease-quantity");
        const increaseButton = item.querySelector(".btn-increase-quantity");
        const quantityElement = item.querySelector(".quantity");
        
        decreaseButton.addEventListener("click", function() {
          let quantity = parseInt(quantityElement.innerText);
          if (quantity > 1) {
            quantity--;
            quantityElement.innerText = quantity;
            calculateTotalPrice();
          }
        });
        
        increaseButton.addEventListener("click", function() {
          let quantity = parseInt(quantityElement.innerText);
          quantity++;
          quantityElement.innerText = quantity;
          calculateTotalPrice();
        });
      });
    }
  
    // Function to handle remove item button
    function handleRemoveItemButtons() {
      cartItems.forEach(function(item) {
        const removeButton = item.querySelector(".btn-remove-item");
        removeButton.addEventListener("click", function() {
          item.remove();
          calculateTotalPrice(); // Update total price after removing item
        });
      });
    }
  
    // Initial calculations
    calculateTotalPrice();
    handleQuantityButtons();
    handleRemoveItemButtons();
  });
  