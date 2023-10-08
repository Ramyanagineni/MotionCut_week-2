// Initialize variables
let cart = [];
let totalPrice = 0;

// Array of actual product names (replace with your product names)
const productNames = [
    "Woods Sneakers For Women(Blue)",
    "MLtuutou Crystal Slippers Flip Fashion Rhinestone Beach(Beige)",
    "Carlton London Sports Women Cl-fw-02_Beige Slipper",
    "Trending girls casual shoes",
    "Women Gold Wedges Sandal",
    "JS GIRLS OR WOMEN FLATS.",
    "Sneakers For Women  (Black, White)",
    "Women Pink Heels Sandal"
];

// Add to Cart button click event
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
    button.addEventListener("click", () => {
        const product = {
            name: productNames[index], // Use the actual product name from the array
            price: 19.99 + (index * 5), // Adjust the price logic as needed
        };

        cart.push(product);
        totalPrice += product.price;

        updateCartUI();
    });
});

// View Cart button click event
document.getElementById("view-cart").addEventListener("click", showCart);

// Function to show the cart
function showCart() {
    // Display the cart items and total in the cart section
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    document.getElementById("cart-total").textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to update the cart UI
function updateCartUI() {
    // Update the cart icon or count (if you have one)
    // You can also add animations or notifications here
}
