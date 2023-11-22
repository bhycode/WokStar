// Basket
let itemsToBasket = [];
// Basket

// document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".menu-section");

    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Pour empêcher le lien de rediriger

            const selectedOption = item.getAttribute("value");

            sections.forEach(section => {
                section.classList.add("hidden");
            });

            const selectedSection = document.getElementById(selectedOption);

            if (selectedSection) {
                selectedSection.classList.remove("hidden");
            }
        });
    });

   
   
// });
const list_plat = [
        {
            id:1,
            image:"assets/imgs/Salades_asiatique.jpg",
            title:"Asian salads",
            description:"Fresh salads with ingredients such as grilled chicken ,sliced beef ,tofu ,crisp vegetables and various dressings.",
            price:69,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:2,
            image:"assets/imgs/Rouleaux_de_printemps.jpg",
            title:"Spring rolls",
            description:"hese fresh rolls are made with thin rice wrappers filled with fresh vegetables, shrimp,chicken, or tofu.",
            price:72,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:3,
            image:"assets/imgs/Dumplings .jpg",
            title:"Dumplings",
            description:"Small pockets of dough filled with meat (pork, chicken, beef) or vegetables.",
            price:90,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:4,
            image:"assets/imgs/Samosas.jpg ",
            title:"Samosas",
            description:"Triangles of pastry filled with potatoes, vegetables, and meat.",
            price:69,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:5,
            image:"assets/imgs/Tempura.webp",
            title:"Tempura",
            description:"consisting of shrimp, vegetables, or other ingredients fried in a light and crispy batter.",
            price:44,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:6,
            image:"assets/imgs/MisoSoup.webp ",
            title:"Miso soup",
            description:"made from fermented soybean paste (miso), tofu, seaweed, and sometimes other ingredients like mushrooms or green onions.",
            price:69,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:7,
            image:"assets/imgs/nems-au-poulet.jpg",
            title:"Nems",
            description:"spring rolls fried, filled with minced meat, shrimp, vegetables, and rice vermicelli.",
            price:42,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:8,
            image:"assets/imgs/Edamame.jpg ",
            title:"Edamame",
            description:"Boiled immature soybeans sprinkled with salt.",
            price:58,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:9,
            image:"assets/imgs/-salmon-sashimi.jpg",
            title:"Sashimis",
            description:"Slices of raw salmon.",
            price:55,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:10,
            image:"assets/imgs/Baozi.jpg ",
            title:"Baozi",
            description:"Steamed buns filled with pork, chicken, vegetables, and other ingredients.",
            price:60,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:11,
            image:"assets/imgs/Crevettes grillées.jpeg",
            title:"Grilled shrimp",
            description:"Flame-grilled shrimp seasoned with salt and pepper.",
            price:75,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:12,
            image:"assets/imgs/-Calamars frits.jpeg ",
            title:"Fried squid",
            description:"Rings of squid coated with batter and fried.",
            price:55,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:13,
            image:"assets/imgs/Kimchi.jpg",
            title:"Kimchi",
            description:"Spicy fermented Chinese cabbage.",
            price:40,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:14,
            image:"assets/imgs/Feuilles de vigne farcies.webp ",
            title:"Stuffed grape leaves",
            description:"grape leaves filled with rice, meat, and herbs.",
            price:70,
            cat:"appetizer",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:15,
            image:"assets/imgs/Poulet au curry.jpg",
            title:"Chicken Curry",
            description:"A spicy chicken dish, served with rice or noodles.",
            price:69,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:16,
            image:"assets/imgs/Poulet à l'orange.jpg",
            title:"Orange Chicken",
            description:"made of breaded chicken pieces served with a sweet and tangy orange sauce.",
            price:59,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:17,
            image:"assets/imgs/Bœuf au brocoli.webp",
            title:"Beef with Broccoli",
            description:"classic Chinese preparation that combines slices of beef, broccoli florets, and soy sauce.",
            price:75,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:18,
            image:"assets/imgs/Pad thai.jpg",
            title:"Pad thai",
            description:"consists of stir-fried rice noodles with vegetables, tofu, shrimp, or other proteins, all seasoned with a tamarind-based sauce.",
            price:55,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:19,
            image:"assets/imgs/Riz frit.jpg",
            title:"Fried Rice",
            description:"sauteed rice with various ingredients, such as vegetables, chicken,or shrimp.",
            price:55,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:20,
            image:"assets/imgs/-Nouilles sautées.jpg",
            title:"Stir-fried noodles",
            description:"Stir-fried noodles with vegetables and various proteins.",
            price:55,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:21,
            image:"assets/imgs/Tso-Tofu.jpg",
            title:"General Tso's Tofu",
            description:"made with breaded and fried tofu.",
            price:50,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:22,
            image:"assets/imgs/Curry_vegetarien.jpg",
            title:"Vegetarian curry",
            description:"A fragrant curry made with vegetables, tofu, and paneer.",
            price:65,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:23,
            image:"assets/imgs/Aubergines au basilic thai.jpg",
            title:"Thai Basil Eggplant",
            description:"Eggplants stir-fried in a wok with Thai basil, garlic, and chilies.",
            price:59,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:24,
            image:"assets/imgs/pho.jpg",
            title:"Pho",
            description:"A rice noodle soup with beef or chicken, garnished with fresh herbs and condiments.",
            price:60,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:25,
            image:"assets/imgs/Biryani.jpg",
            title:"Biryani",
            description:"A dish of fragrant basmati rice cooked with spices, meat (such as chicken or lamb), and sometimes vegetables.",
            price:79,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:26,
            image:"assets/imgs/Sushi.webp",
            title:"Sushi",
            description:"A variety of sushi prepared with raw fish, vinegared rice, vegetables, and nori seaweed.",
            price:75,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:27,
            image:"assets/imgs/Ramen.jpg",
            title:"Ramen",
            description:"A soup with noodles, broth, vegetables, and proteins such as chicken.",
            price:52,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:28,
            image:"assets/imgs/Légumes sautés.jpeg",
            title:"Sauteed vegetables",
            description:"Stir-fried vegetables with a light sauced.",
            price:55,
            cat:"dishes",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:29,
            image:"assets/imgs/jasmine_tea.jpg",
            title:"Jasmine tea",
            description:"Jasmine tea is a green tea scented with jasmine flowers, giving it a delicate and floral flavor.",
            price:30,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:30,
            image:"assets/imgs/Boissons aux fruits exotiques.jpg",
            title:"Exotic fruit drinks",
            description:"Tropical fruit juices, such as mango juice, lychee juice, coconut juice, and guava juice.",
            price:39,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:31,
            image:"assets/imgs/Lassi.webp",
            title:"Lassi",
            description:"made from yogurt, milk, water, and fruits (mango lassi, strawberry lassi, etc.)",
            price:37,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:32,
            image:"assets/imgs/Thé glacé.webp",
            title:"Iced tea",
            description:"Iced tea is commonly served, whether it's black tea, green tea, or other varieties, sometimes sweetened.",
            price:25,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:33,
            image:"assets/imgs/Café vietnamien.jpg" ,
            title:"Vietnamese coffee",
            description:"A strong coffee served with sweetened condensed milk, typically served cold.",
            price:32,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:34,
            image:"assets/imgs/Boissons non alcoolisées asiatiques.webp",
            title:"Asian non-alcoholic drinks",
            description:"Non-alcoholic beverages such as coconut water, soy milk, milk tea (bubble tea or boba tea).",
            price:45,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:35,
            image:"assets/imgs/Yuzu Ade.jpg",
            title:"Yuzu Ade",
            description:"A carbonated beverage flavored with yuzu, a Japanese citrus fruit.",
            price:39,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:36,
            image:"assets/imgs/Boissons au taro.webp" ,
            title:"Taro drinks",
            description:"Drinks made from taro, a purple root, which can be served hot or cold.",
            price:40,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:37,
            image:"assets/imgs/Chai.webp",
            title:"Chai",
            description:"Chai is a spiced beverage made from black tea, milk, and a blend of spices, typically including cinnamon, ginger, cloves, and cardamom.",
            price:35,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:38,
            image:"assets/imgs/Sugarcane Juice.webp" ,
            title:"Sugarcane Juice",
            description:"A refreshing beverage, made from fresh sugarcane.",
            price:20,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:39,
            image:"assets/imgs/Aloe Vera Drink.jpeg",
            title:"Aloe Vera Drink",
            description:"A beverage made from aloe vera gel, typically flavored with fruits and sweetened.",
            price:35,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:40,
            image:"assets/imgs/Teh Tarik.webp",
            title:"Teh Tarik",
            description:"black tea mixed with sweetened milk, pulled to create a frothy top.",
            price:29,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
        {
            id:41,
            image:"assets/imgs/Calpis.jpg" ,
            title:"Calpis",
            description:"A slightly tangy dairy beverage made from fermented milk.",
            price:25,
            cat:"drinks",
            quantity: 1,
            customized: false,
            sauce: null,
            size: null,
            extra_items: null,
        },
    
    ];
// // Function to update the HTML based on the provided data
// function updatePersonalizationSection(itemIndex) {
//     const item = list_plat[itemIndex]; // Assuming you're passing an index

//     // Get references to HTML elements
//     const titleElement = document.querySelector('.title');
//     const nameOfFoodElement = document.querySelector('.tiltlebord');
//     const descriptionElement = document.querySelector('.text-danger');
//     const imageElement = document.querySelector('.pizza');

//     // Update HTML content with data from the item
//     titleElement.textContent = item.title; // Assuming 'title' exists in your item object
//     nameOfFoodElement.textContent = item.title; // Assuming 'title' is the food name
//     descriptionElement.textContent = item.description; // Assuming 'description' exists in your item object
//     imageElement.src = item.image; // Assuming 'image' contains the path to the image
// }

// Call the function with an index to update the content for a specific food item
// updatePersonalizationSection(0); // For example, updates with the first item


localStorage.setItem("list_plat",JSON.stringify(list_plat))

let list_plat2= JSON.parse(localStorage.getItem("list_plat"));

// console.log(list_plat2)


function addToCart(itemId) {
    // Find the object with the given id from the list_plat array
    const clickedObject = list_plat.find(item => item.id === itemId);

    if (clickedObject) {

        console.log("Added to storage:", clickedObject);
        localStorage.setItem("list_plat", JSON.stringify(clickedObject));
        // Basket
        itemsToBasket.push(clickedObject);
        localStorage.setItem('foodItems', JSON.stringify(itemsToBasket));

        // Basket
        console.log(localStorage)
        // window.location.href = "./basket.html"; 
    } else {
        console.log("not found.");
    }
}


// function addToPersonalize(itemId) {
//     // Find the object with the given id from the list_plat array
//     const clickedObject = list_plat.find(item => item.id === itemId);

//     if (clickedObject) {

//         console.log("Added to storage:", clickedObject);
//         localStorage.setItem("list_plat", JSON.stringify(clickedObject));
//         console.log(localStorage)
//     } else {
//         console.log("not found.");
//     }
// }

//--------------------------------
const main = document.getElementById("menu-container")
const pagination = document.getElementById("pagination")

var selectedCat = selectedOption
var totalBtn = 0
const totalShow = 10
const show = (page)=>{
    main.innerHTML=""
    let start = (page - 1) * totalShow
    
    const listByCat = list_plat.filter((item)=>{
        return item.cat === selectedCat 
    })

    let showedElements = listByCat.filter((element, index)=>{
        return index >= start && index < start + totalShow
    })
    
    
    showedElements.forEach((item)=>{
        let htlmElem = document.createElement("p")
        htlmElem.setAttribute("id",item.id)
        htlmElem.innerHTML =  `Name : ${item.name} Price:${item.price}`

        // let btn = document.createElement("button")
        // btn.innerHTML = "show data"
        // btn.addEventListener("click",function(){ 
        //     showData(item.id)
        // })
        // htlmElem.appendChild(btn)

        main.appendChild(htlmElem)
    })

}

const selectCat=(cat)=>{
    selectedCat = selectedOption   
    const listByCat = list.filter((item)=>{
        return item.cat === selectedCat 
    })

    totalBtn = Math.ceil((listByCat.length) / totalShow)
    pagination.innerHTML=""
    for(let i =1 ; i <= totalBtn; i++){
        console.log(totalBtn);
        let btn = document.createElement("button")
        btn.innerHTML = i
        btn.addEventListener("click",function(){ 
            show(i)
        })
        pagination.appendChild(btn)
    }

    //show the first page by default
    show(1)
}
selectCat(selectedOption)













function handlePersonalizeButtonClick(event, itemId) {
   const clickedObject = list_plat.find(item => item.id === itemId);
   
   if (clickedObject && clickedObject.customized === false){
        clickedObject.customized = true;
        console.log("customize is false and has been changed to true");
    } else {
     console.log("customize is not false or 'clickedObject' is undefined");
   }  
   
   
   // Get the specific plat-div element using the provided ID
    const parentDiv = document.getElementById(itemId);

    // Extract necessary information from the parent div
    const title = parentDiv.querySelector("h3").textContent;
    const description = parentDiv.querySelector("p").textContent;
    const price = parentDiv.querySelector(".price").textContent;
    const imageSrc = parentDiv.querySelector("img").getAttribute("src");

    // Create an object with the extracted data
    const personalizedPlate = {
      title: title,
      description: description,
      price: price,
      imageSrc: imageSrc,
    };

    // Store the personalized plate data in localStorage
    localStorage.setItem(
      "personalizedPlate",
      JSON.stringify(personalizedPlate)
    );

    // Redirect to the personalized.html page
    window.location.href = "personalisation.html";
  }








