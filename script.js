
const products = [
    { id: 1, name: "Telegram Premium 1 мес", price: 48000, img: "tg.png" },
    { id: 2, name: "Telegram Premium 3 мес", price: 170000, img: "tg.png" },
    { id: 3, name: "Telegram Premium 6 мес", price: 220000, img: "tg.png" },
    { id: 4, name: "Telegram Premium 12 мес", price: 250000, img: "tg.png" },
    { id: 5, name: "100 Stars", price: 35000, img: "star.png" },
    { id: 6, name: "250 Stars", price: 70000, img: "star.png" },
    { id: 7, name: "500 Stars", price: 125000, img: "star.png" },
    { id: 8, name: "1000 Stars", price: 350000, img: "star.png" },
    { id: 9, name: "Account Kenya", price: 14000, img: "globe.png" },
];

const cart = [];

function renderProducts() {
    const list = document.getElementById("product-list");
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${p.img}" />
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()} сум</p>
            <button onclick="addToCart(${p.id})">Купить</button>
        `;
        list.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} — ${item.price.toLocaleString()} сум`;
        cartList.appendChild(li);
    });
}

function checkout() {
    const orderId = "AB-" + Math.floor(Math.random() * 99999);
    alert("Ваш код заказа: " + orderId);
    cart.length = 0;
    updateCart();
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function setLanguage(lang) {
    alert("Язык установлен: " + lang);
}

window.onload = renderProducts;
