
// const food_items_list=[
//     {
//         id:1,
//         image:"assets/imgs/Salades_asiatique.jpg",
//         title:"Asian salads",
//         description:"Fresh salads with ingredients such as grilled chicken ,sliced beef ,tofu ,crisp vegetables and various dressings.",
//         price:69
//     },
//     {
//         id:2,
//         image:"assets/imgs/Rouleaux_de_printemps.jpg",
//         title:"Spring rolls",
//         description:"hese fresh rolls are made with thin rice wrappers filled with fresh vegetables, shrimp,chicken, or tofu.",
//         price:72
//     },
//     {
//         id:3,
//         image:"assets/imgs/Dumplings .jpg",
//         title:"Dumplings",
//         description:"Small pockets of dough filled with meat (pork, chicken, beef) or vegetables.",
//         price:90
//     },
//     {
//         id:4,
//         image:"assets/imgs/Samosas.jpg ",
//         title:"Samosas",
//         description:"Triangles of pastry filled with potatoes, vegetables, and meat.",
//         price:69
//     },
//     {
//         id:5,
//         image:"assets/imgs/Tempura.webp",
//         title:"Tempura",
//         description:"consisting of shrimp, vegetables, or other ingredients fried in a light and crispy batter.",
//         price:44
//     },
//     {
//         id:6,
//         image:"assets/imgs/MisoSoup.webp ",
//         title:"Miso soup",
//         description:"made from fermented soybean paste (miso), tofu, seaweed, and sometimes other ingredients like mushrooms or green onions.",
//         price:69
//     },
//     {
//         id:7,
//         image:"assets/imgs/nems-au-poulet.jpg",
//         title:"Nems",
//         description:"spring rolls fried, filled with minced meat, shrimp, vegetables, and rice vermicelli.",
//         price:42
//     },
//     {
//         id:8,
//         image:"assets/imgs/Edamame.jpg ",
//         title:"Edamame",
//         description:"Boiled immature soybeans sprinkled with salt.",
//         price:58
//     },
//     {
//         id:9,
//         image:"assets/imgs/-salmon-sashimi.jpg",
//         title:"Sashimis",
//         description:"Slices of raw salmon.",
//         price:55
//     },
//     {
//         id:10,
//         image:"assets/imgs/Baozi.jpg ",
//         title:"Baozi",
//         description:"Steamed buns filled with pork, chicken, vegetables, and other ingredients.",
//         price:60
//     },
//     {
//         id:11,
//         image:"assets/imgs/Crevettes grillées.jpeg",
//         title:"Grilled shrimp",
//         description:"Flame-grilled shrimp seasoned with salt and pepper.",
//         price:75
//     },
//     {
//         id:12,
//         image:"assets/imgs/-Calamars frits.jpeg ",
//         title:"Fried squid",
//         description:"Rings of squid coated with batter and fried.",
//         price:55
//     },
//     {
//         id:13,
//         image:"assets/imgs/Kimchi.jpg",
//         title:"Kimchi",
//         description:"Spicy fermented Chinese cabbage.",
//         price:40
//     },
//     {
//         id:14,
//         image:"assets/imgs/Feuilles de vigne farcies.webp ",
//         title:"Stuffed grape leaves",
//         description:"grape leaves filled with rice, meat, and herbs.",
//         price:70
//     },
//     {
//         id:15,
//         image:"assets/imgs/Poulet au curry.jpg",
//         title:"Chicken Curry",
//         description:"A spicy chicken dish, served with rice or noodles.",
//         price:69
//     },
//     {
//         id:16,
//         image:"assets/imgs/Poulet à l'orange.jpg",
//         title:"Orange Chicken",
//         description:"made of breaded chicken pieces served with a sweet and tangy orange sauce.",
//         price:59
//     },
//     {
//         id:17,
//         image:"assets/imgs/Bœuf au brocoli.webp",
//         title:"Beef with Broccoli",
//         description:"classic Chinese preparation that combines slices of beef, broccoli florets, and soy sauce.",
//         price:75
//     },
//     {
//         id:18,
//         image:"assets/imgs/Pad thai.jpg",
//         title:"Pad thai",
//         description:"consists of stir-fried rice noodles with vegetables, tofu, shrimp, or other proteins, all seasoned with a tamarind-based sauce.",
//         price:55
//     },
//     {
//         id:19,
//         image:"assets/imgs/Riz frit.jpg",
//         title:"Fried Rice",
//         description:"sauteed rice with various ingredients, such as vegetables, chicken,or shrimp.",
//         price:55
//     },
//     {
//         id:20,
//         image:"assets/imgs/-Nouilles sautées.jpg",
//         title:"Stir-fried noodles",
//         description:"Stir-fried noodles with vegetables and various proteins.",
//         price:55
//     },

// ]

// Get data from the basket
const food_items_list = JSON.parse(localStorage.getItem('foodItems'));

var table = document.getElementById("table");

// itemContainer.classList.add("basket-item-container");

food_items_list.forEach((plate) => {
    var itemContainer = document.createElement("tr");

    itemContainer.innerHTML = `
    <tr>
        <td>${plate.title}</td>
        <td>${plate.id}</td>
        <td>${plate.price}</td>
        <td>${plate.price}</td>
    </tr>
    `;
    table.appendChild(itemContainer);
});

function addButton(id) {
    document.getElementById(`items-number${i}`).textContent = parseInt(document.getElementById(`items-number${i}`)) + 1;
}
 
