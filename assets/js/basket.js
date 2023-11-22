
// const foodItemsList = [
//     {
//         id: 1,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Asian Salads+++++",
//         description: "Fresh salads with ingredients such as grilled chicken, sliced beef, tofu, crisp vegetables, and various dressings.",
//         price: 150,
//         quantity: 12,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null
//     },
//     {
//         id: 2,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Spring Rolls",
//         description: "These fresh rolls are made with thin rice wrappers filled with fresh vegetables, shrimp, chicken, or tofu.",
//         price: 72,
//         quantity: 8,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 3,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Dumplings",
//         description: "Small pockets of dough filled with meat (pork, chicken, beef) or vegetables.",
//         price: 90,
//         quantity: 15,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 4,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Samosas",
//         description: "Triangles of pastry filled with potatoes, vegetables, and meat.",
//         price: 69,
//         quantity: 12,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 5,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Tempura",
//         description: "Consisting of shrimp, vegetables, or other ingredients fried in a light and crispy batter.",
//         price: 44,
//         quantity: 20,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 6,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Miso Soup",
//         description: "Made from fermented soybean paste (miso), tofu, seaweed, and sometimes other ingredients like mushrooms or green onions.",
//         price: 69,
//         quantity: 18,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 7,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Nems",
//         description: "Spring rolls fried, filled with minced meat, shrimp, vegetables, and rice vermicelli.",
//         price: 42,
//         quantity: 25,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 8,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Edamame",
//         description: "Boiled immature soybeans sprinkled with salt.",
//         price: 58,
//         quantity: 22,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 9,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Sashimi",
//         description: "Slices of raw salmon.",
//         price: 55,
//         quantity: 16,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 10,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Baozi",
//         description: "Steamed buns filled with pork, chicken, vegetables, and other ingredients.",
//         price: 60,
//         quantity: 14,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
//     {
//         id: 11,
//         image: "assets/images/index/type-pasta.svg",
//         title: "Grilled Shrimp",
//         description: "Flame-grilled shrimp seasoned with salt and pepper.",
//         price: 75,
//         quantity: 11,
//         customized: false,
//         sauce: null,
//         size: null,
//         extra_items: null,
//     },
// ];

// Set data
//localStorage.setItem('foodItems', JSON.stringify(foodItemsList));

// Get data
const result = JSON.parse(localStorage.getItem('foodItems'));



var basketContainer = document.getElementById("basket-items-container");


// Use data
result.forEach((plate, index) => {
    var itemContainer = document.createElement("div");
    itemContainer.classList.add("basket-item-container");

    itemContainer.innerHTML = `
    <img src="${plate.image}">
    <div>
    <p id="item-name">${plate.title}</p>
    <p id="item-description">${plate.description}</p>
    <p id="item-price">${plate.price} DH</p>
    <div>
    <button id="items-number${index+1}" class="items-number">${plate.quantity}</button>
    <button id="add-item${index+1}" class="add-item" onclick="addItem(${index+1});">+</button>
    <button id="remove-item${index+1}" class="remove-item" onclick="removeItem(${index+1});">-</button>
    </div>
    </div>
    `;

    basketContainer.appendChild(itemContainer);
});

function addItem(id) {
    if(result[id].quantity < 20) {
        result[id].quantity += 1;
        document.getElementById(`items-number${id}`).textContent = result[id].quantity;
    } else {
        result[id].quantity = 1;
        document.getElementById(`items-number${id}`).textContent = 1;
    }
}

function removeItem(id) {
    if(result[id].quantity > 1) {
        result[id].quantity -= 1;
        document.getElementById(`items-number${id}`).textContent = result[id].quantity;
    } else {
        result[id].quantity = 20;
        document.getElementById(`items-number${id}`).textContent = 20;
    }
}




let request_quote = document.getElementById("request-quote");
let confirm_order = document.getElementById("confirm-order");

request_quote.addEventListener("click", function() {
    localStorage.setItem('foodItems', JSON.stringify(result));
    window.location.href = "../../devis.html";
});

confirm_order.addEventListener("click", function() {
    // Empty the basket and reload the page
    localStorage.removeItem("foodItems");
    location.reload();
});