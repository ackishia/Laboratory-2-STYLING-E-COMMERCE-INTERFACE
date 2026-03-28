// ==============================
// PRODUCT CLASS & DATA
// ==============================
class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const products = [
    new Product(1, "Classic Leather Bag", 499, "brown leather bag.jpg"),
    new Product(2, "Scarf Tote Bag", 1999, "scarf brown bag.jpg"),
    new Product(3, "Black Hand Bag", 1999, "scarf black bag.jpg"),
    new Product(4, "White Leather Bag", 1999, "white leather bag.jpg"),
    new Product(5, "Red Stiletto", 2199, "red.jpg"),
    new Product(6, "Black Heels", 3499, "black heels.jpg"),
    new Product(7, "Maroon Stiletto", 2500, "maroon stiletto.jpg"),
    new Product(8, "Ribbon Heels", 1299, "red ribbon heels.jpg"),
    new Product(9, "Red Dress", 1299, "red dress.jpg"),
    new Product(10, "Blush Dress", 499, "sexy red dress.jpg")
];


// ==============================
// CART STORAGE
// ==============================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==============================
// DISPLAY PRODUCTS
// ==============================
const productContainer = document.getElementById("product-container");

if (productContainer) {
    products.forEach(product => {
        const article = document.createElement("article");

        const img = document.createElement("img");
        img.src = product.image;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = "Php." + product.price;

        const btn = document.createElement("button");
        btn.textContent = "Add to Cart";
        btn.setAttribute("data-id", product.id);

        const viewBtn = document.createElement("button");
        viewBtn.textContent = "View Detail";
        viewBtn.onclick = function () {
            window.location.href = "detail.html?id=" + product.id;
        };

        article.appendChild(img);
        article.appendChild(name);
        article.appendChild(price);
        article.appendChild(btn);
        article.appendChild(viewBtn);

        productContainer.appendChild(article);
    });
}

// ==============================
// ADD TO CART
// ==============================
document.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON" && e.target.dataset.id) {
        const productId = parseInt(e.target.dataset.id);
        const selectedProduct = products.find(p => p.id === productId);

        if (selectedProduct) {
            cart.push(selectedProduct);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(selectedProduct.name + " added to cart!");
        }
    }
});

// ==============================
// RENDER CART
// ==============================
function renderCart() {
    const cartList = document.querySelector("ul");
    if (!cartList) return;

    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Php.${item.price}`;
        cartList.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const totalSection = document.getElementById("cart-total");
    if (totalSection) {
        totalSection.textContent = "Subtotal: Php." + total;
    }

    localStorage.setItem("cartTotal", total);
}

document.addEventListener("DOMContentLoaded", renderCart);

// ==============================
// ✅ FIXED CHECKOUT TOTAL
// ==============================
function displayCheckoutTotal() {
    const totalElement = document.getElementById("cart-total"); // ✅ FIXED
    if (!totalElement) return;

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = "Total: Php " + total;
}

document.addEventListener("DOMContentLoaded", displayCheckoutTotal);

// ==============================
// ✅ FIXED CHECKOUT FORM
// ==============================
const checkoutForm = document.getElementById("checkout-form"); // ✅ more specific

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
        e.preventDefault(); // ✅ VERY IMPORTANT

        const name = document.querySelector("#name");
        const street = document.querySelector("#street");

        if (name.value.trim() === "" || street.value.trim() === "") {
            alert("Please fill in all fields");
            return;
        }

        const orderId = "ORD-" + Math.floor(Math.random() * 1000000);
        const total = cart.reduce((sum, item) => sum + item.price, 0);

        localStorage.setItem("orderId", orderId);
        localStorage.setItem("orderTotal", total);

        localStorage.removeItem("cart");

        // ✅ GUARANTEED REDIRECT
        window.location.href = "thankyou.html";
    });
}

// ==============================
// THANK YOU PAGE
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const orderIdDisplay = document.getElementById("order-id");
    const orderTotalDisplay = document.getElementById("order-total");

    if (orderIdDisplay && orderTotalDisplay) {
        orderIdDisplay.textContent = localStorage.getItem("orderId") || "N/A";
        orderTotalDisplay.textContent = "₱" + (localStorage.getItem("orderTotal") || "0");
    }
});

// ==============================
// HEADER (SAFE)
// ==============================
const header = document.querySelector("header h1");

if (header) {
    header.textContent = "Fashion Style";
}