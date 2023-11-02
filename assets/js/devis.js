
const food_items_list=[
    {
        id:1,
        image:"assets/imgs/Salades_asiatique.jpg",
        title:"Asian salads",
        description:"Fresh salads with ingredients such as grilled chicken ,sliced beef ,tofu ,crisp vegetables and various dressings.",
        price:69
    },
    {
        id:2,
        image:"assets/imgs/Rouleaux_de_printemps.jpg",
        title:"Spring rolls",
        description:"hese fresh rolls are made with thin rice wrappers filled with fresh vegetables, shrimp,chicken, or tofu.",
        price:72
    },
    {
        id:3,
        image:"assets/imgs/Dumplings .jpg",
        title:"Dumplings",
        description:"Small pockets of dough filled with meat (pork, chicken, beef) or vegetables.",
        price:90
    },
    {
        id:4,
        image:"assets/imgs/Samosas.jpg ",
        title:"Samosas",
        description:"Triangles of pastry filled with potatoes, vegetables, and meat.",
        price:69
    },
    {
        id:5,
        image:"assets/imgs/Tempura.webp",
        title:"Tempura",
        description:"consisting of shrimp, vegetables, or other ingredients fried in a light and crispy batter.",
        price:44
    },
    {
        id:6,
        image:"assets/imgs/MisoSoup.webp ",
        title:"Miso soup",
        description:"made from fermented soybean paste (miso), tofu, seaweed, and sometimes other ingredients like mushrooms or green onions.",
        price:69
    },
    {
        id:7,
        image:"assets/imgs/nems-au-poulet.jpg",
        title:"Nems",
        description:"spring rolls fried, filled with minced meat, shrimp, vegetables, and rice vermicelli.",
        price:42
    },
    {
        id:8,
        image:"assets/imgs/Edamame.jpg ",
        title:"Edamame",
        description:"Boiled immature soybeans sprinkled with salt.",
        price:58
    },
    {
        id:9,
        image:"assets/imgs/-salmon-sashimi.jpg",
        title:"Sashimis",
        description:"Slices of raw salmon.",
        price:55
    },
    {
        id:10,
        image:"assets/imgs/Baozi.jpg ",
        title:"Baozi",
        description:"Steamed buns filled with pork, chicken, vegetables, and other ingredients.",
        price:60
    }

]

var table = document.getElementById("table");

// itemContainer.classList.add("basket-item-container");
var total = 0
food_items_list.forEach((plate) => {
    var itemContainer = document.createElement("tr");
    total += plate.price
    ht = plate.price/(1+20/100)
    tva = plate.price - ht

    itemContainer.innerHTML = `
    <tr>
        <td>${plate.title}</td>
        <td>${plate.id}</td>
        <td>${ht.toFixed(2)}</td>
        <td>${plate.price}</td>
    </tr>
    `;
    table.appendChild(itemContainer);
});


var itemContainer = document.createElement("tr");
// itemContainer.className.add("item-container");

itemContainer.innerHTML = `
    <td class="no-border-right"> </td>
    <td class="no-border-left no-border-right"> </td>
    <td class="no-border-left no-border-right">Total : </td>
    <td class="no-border-left">${total} dh</td>
`;
table.appendChild(itemContainer);



 
