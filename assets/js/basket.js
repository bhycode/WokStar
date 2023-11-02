// let items_number = document.getElementById("items-number");
// let add_item = document.getElementById("add-item");
// let remove_item = document.getElementById("remove-item");


// add_item.addEventListener("click", function() {
//     if(parseInt(items_number.innerHTML) < 20) {
//         items_number.innerHTML = parseInt(items_number.innerHTML) + 1;
//     } else {
//         items_number.innerHTML = 1;
//     }
// });

// remove_item.addEventListener("click", function() {
//     if(parseInt(items_number.innerHTML) > 1) {
//         items_number.innerHTML = parseInt(items_number.innerHTML) - 1;
//     } else {
//         items_number.innerHTML = 20;
//     }
// });



let list_plat2= JSON.parse(localStorage.getItem("list_plat"));
console.log(list_plat2);

// Sample item object
var newItem = {
    itemImagePath: "assets/images/index/type-pasta.svg",
    name: "Salades asiatiques",
    description: "Des salades fraîches qui peuvent inclure des ingrédients comme le poulet grillé, le bœuf tranché, le tofu, les légumes croquants, et diverses vinaigrettes.",
    price: "50 DH",
    quantity: 1
};

var basketContainer = document.getElementById("basket-items-container");

var itemContainer = document.createElement("div");
itemContainer.classList.add("basket-item-container");


for (var itemNumber = 1; itemNumber < 10; itemNumber++) {
    var itemContainer = document.createElement("div");
    itemContainer.classList.add("basket-item-container");

    itemContainer.innerHTML = `
    <img src="${newItem.itemImagePath}">
    <div>
    <p id="item-name">${newItem.name}</p>
    <p id="item-description">${newItem.description}</p>
    <p id="item-price">${newItem.price}</p>
    <div>
    <button id="items-number${itemNumber}" class="items-number">${newItem.quantity}</button>
    <button id="add-item${itemNumber}" class="add-item">+</button>
    <button id="remove-item${itemNumber}" class="remove-item">-</button>
    </div>
    </div>
    `;

    basketContainer.appendChild(itemContainer);


    var addButton = document.getElementById(`add-item${itemNumber}`);
    var removeButton = document.getElementById(`remove-item${itemNumber}`);
    var itemsNumberButton = document.getElementById(`items-number${itemNumber}`);
    
    addButton.addEventListener("click", function() {
        newItem.quantity++;
        itemsNumberButton.textContent = newItem.quantity;
    });
    
    removeButton.addEventListener("click", function() {
    if (newItem.quantity > 1) {
        newItem.quantity--;
        itemsNumberButton.textContent = newItem.quantity;
    }
    });

    
}

function addItem(itemNumber) {
    var addButton = document.getElementById(`add-item${itemNumber}`);
    addButton.addEventListener("click", function() {
        newItem.quantity++;
        itemsNumberButton.textContent = newItem.quantity;
    });
}

