
const food_items_list = [
    {
        id: 1,
        image: "assets/images/index/type-pasta.svg",
        title: "Asian salads",
        description: "Fresh salads with ingredients such as grilled chicken, sliced beef, tofu, crisp vegetables and various dressings.",
        price: 69,
        quantity: 10
    },
    {
        id: 2,
        image: "assets/images/index/type-pasta.svg",
        title: "Spring rolls",
        description: "These fresh rolls are made with thin rice wrappers filled with fresh vegetables, shrimp, chicken, or tofu.",
        price: 72,
        quantity: 8
    },
    {
        id: 3,
        image: "assets/images/index/type-pasta.svg",
        title: "Dumplings",
        description: "Small pockets of dough filled with meat (pork, chicken, beef) or vegetables.",
        price: 90,
        quantity: 15
    },
    {
        id: 4,
        image: "assets/images/index/type-pasta.svg",
        title: "Samosas",
        description: "Triangles of pastry filled with potatoes, vegetables, and meat.",
        price: 69,
        quantity: 12
    },
    {
        id: 5,
        image: "assets/images/index/type-pasta.svg",
        title: "Tempura",
        description: "Consisting of shrimp, vegetables, or other ingredients fried in a light and crispy batter.",
        price: 44,
        quantity: 20
    },
    {
        id: 6,
        image: "assets/images/index/type-pasta.svg",
        title: "Miso soup",
        description: "Made from fermented soybean paste (miso), tofu, seaweed, and sometimes other ingredients like mushrooms or green onions.",
        price: 69,
        quantity: 18
    },
    {
        id: 7,
        image: "assets/images/index/type-pasta.svg",
        title: "Nems",
        description: "Spring rolls fried, filled with minced meat, shrimp, vegetables, and rice vermicelli.",
        price: 42,
        quantity: 25
    },
    {
        id: 8,
        image: "assets/images/index/type-pasta.svg",
        title: "Edamame",
        description: "Boiled immature soybeans sprinkled with salt.",
        price: 58,
        quantity: 22
    },
    {
        id: 9,
        image: "assets/images/index/type-pasta.svg",
        title: "Sashimis",
        description: "Slices of raw salmon.",
        price: 55,
        quantity: 16
    },
    {
        id: 10,
        image: "assets/images/index/type-pasta.svg",
        title: "Baozi",
        description: "Steamed buns filled with pork, chicken, vegetables, and other ingredients.",
        price: 60,
        quantity: 14
    },
    {
        id: 11,
        image: "assets/images/index/type-pasta.svg",
        title: "Grilled shrimp",
        description: "Flame-grilled shrimp seasoned with salt and pepper.",
        price: 75,
        quantity: 11
    },

]

var basketContainer = document.getElementById("basket-items-container");



food_items_list.forEach((plate, index) => {
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
    if(parseInt(document.getElementById(`items-number${id}`).innerHTML) < 20) {
        document.getElementById(`items-number${id}`).textContent = parseInt(document.getElementById(`items-number${id}`).innerHTML) + 1;
    } else {
        document.getElementById(`items-number${id}`).textContent = 1;
    }
}

function removeItem(id) {
    if(parseInt(document.getElementById(`items-number${id}`).innerHTML) > 1) {
        document.getElementById(`items-number${id}`).textContent = parseInt(document.getElementById(`items-number${id}`).innerHTML) - 1;
    } else {
        document.getElementById(`items-number${id}`).textContent = 20;
    }
    
}