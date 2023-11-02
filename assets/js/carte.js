document.addEventListener("DOMContentLoaded", function() {
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

   
   
});
const list_plat=[
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
    },
    {
        id:11,
        image:"assets/imgs/Crevettes grillées.jpeg",
        title:"Grilled shrimp",
        description:"Flame-grilled shrimp seasoned with salt and pepper.",
        price:75
    },
    {
        id:12,
        image:"assets/imgs/-Calamars frits.jpeg ",
        title:"Fried squid",
        description:"Rings of squid coated with batter and fried.",
        price:55
    },
    {
        id:13,
        image:"assets/imgs/Kimchi.jpg",
        title:"Kimchi",
        description:"Spicy fermented Chinese cabbage.",
        price:40
    },
    {
        id:14,
        image:"assets/imgs/Feuilles de vigne farcies.webp ",
        title:"Stuffed grape leaves",
        description:"grape leaves filled with rice, meat, and herbs.",
        price:70
    },
    {
        id:15,
        image:"assets/imgs/Poulet au curry.jpg",
        title:"Chicken Curry",
        description:"A spicy chicken dish, served with rice or noodles.",
        price:69
    },
    {
        id:16,
        image:"assets/imgs/Poulet à l'orange.jpg",
        title:"Orange Chicken",
        description:"made of breaded chicken pieces served with a sweet and tangy orange sauce.",
        price:59
    },
    {
        id:17,
        image:"assets/imgs/Bœuf au brocoli.webp",
        title:"Beef with Broccoli",
        description:"classic Chinese preparation that combines slices of beef, broccoli florets, and soy sauce.",
        price:75
    },
    {
        id:18,
        image:"assets/imgs/Pad thai.jpg",
        title:"Pad thai",
        description:"consists of stir-fried rice noodles with vegetables, tofu, shrimp, or other proteins, all seasoned with a tamarind-based sauce.",
        price:55
    },
    {
        id:19,
        image:"assets/imgs/Riz frit.jpg",
        title:"Fried Rice",
        description:"sauteed rice with various ingredients, such as vegetables, chicken,or shrimp.",
        price:55
    },
    {
        id:20,
        image:"assets/imgs/-Nouilles sautées.jpg",
        title:"Stir-fried noodles",
        description:"Stir-fried noodles with vegetables and various proteins.",
        price:55
    },
    {
        id:21,
        image:"assets/imgs/Tso-Tofu.jpg",
        title:"General Tso's Tofu",
        description:"made with breaded and fried tofu.",
        price:50
    },
    {
        id:22,
        image:"assets/imgs/Curry_vegetarien.jpg",
        title:"Vegetarian curry",
        description:"A fragrant curry made with vegetables, tofu, and paneer.",
        price:65
    },
    {
        id:23,
        image:"assets/imgs/Aubergines au basilic thai.jpg",
        title:"Thai Basil Eggplant",
        description:"Eggplants stir-fried in a wok with Thai basil, garlic, and chilies.",
        price:59
    },
    {
        id:24,
        image:"assets/imgs/pho.jpg",
        title:"Pho",
        description:"A rice noodle soup with beef or chicken, garnished with fresh herbs and condiments.",
        price:60
    },
    {
        id:25,
        image:"assets/imgs/Biryani.jpg",
        title:"Biryani",
        description:"A dish of fragrant basmati rice cooked with spices, meat (such as chicken or lamb), and sometimes vegetables.",
        price:79
    },
    {
        id:26,
        image:"assets/imgs/Sushi.webp",
        title:"Sushi",
        description:"A variety of sushi prepared with raw fish, vinegared rice, vegetables, and nori seaweed.",
        price:75
    },
    {
        id:27,
        image:"assets/imgs/Ramen.jpg",
        title:"Ramen",
        description:"A soup with noodles, broth, vegetables, and proteins such as chicken.",
        price:52
    },
    {
        id:28,
        image:"assets/imgs/Légumes sautés.jpeg",
        title:"Sauteed vegetables",
        description:"Stir-fried vegetables with a light sauced.",
        price:55
    },
    {
        id:29,
        image:"assets/imgs/jasmine_tea.jpg",
        title:"Jasmine tea",
        description:"Jasmine tea is a green tea scented with jasmine flowers, giving it a delicate and floral flavor.",
        price:30
    },
    {
        id:30,
        image:"assets/imgs/Boissons aux fruits exotiques.jpg",
        title:"Exotic fruit drinks",
        description:"Tropical fruit juices, such as mango juice, lychee juice, coconut juice, and guava juice.",
        price:39
    },
    {
        id:31,
        image:"assets/imgs/Lassi.webp",
        title:"Lassi",
        description:"made from yogurt, milk, water, and fruits (mango lassi, strawberry lassi, etc.)",
        price:37
    },
    {
        id:32,
        image:"assets/imgs/Thé glacé.webp",
        title:"Iced tea",
        description:"Iced tea is commonly served, whether it's black tea, green tea, or other varieties, sometimes sweetened.",
        price:25
    },
    {
        id:33,
        image:"assets/imgs/Café vietnamien.jpg" ,
        title:"Vietnamese coffee",
        description:"A strong coffee served with sweetened condensed milk, typically served cold.",
        price:32
    },
    {
        id:34,
        image:"assets/imgs/Boissons non alcoolisées asiatiques.webp",
        title:"Asian non-alcoholic drinks",
        description:"Non-alcoholic beverages such as coconut water, soy milk, milk tea (bubble tea or boba tea).",
        price:45
    },
    {
        id:35,
        image:"assets/imgs/Yuzu Ade.jpg",
        title:"Yuzu Ade",
        description:"A carbonated beverage flavored with yuzu, a Japanese citrus fruit.",
        price:39
    },
    {
        id:36,
        image:"assets/imgs/Boissons au taro.webp" ,
        title:"Taro drinks",
        description:"Drinks made from taro, a purple root, which can be served hot or cold.",
        price:40
    },
    {
        id:37,
        image:"assets/imgs/Chai.webp",
        title:"Chai",
        description:"Chai is a spiced beverage made from black tea, milk, and a blend of spices, typically including cinnamon, ginger, cloves, and cardamom.",
        price:35
    },
    {
        id:38,
        image:"assets/imgs/Sugarcane Juice.webp" ,
        title:"Sugarcane Juice",
        description:"A refreshing beverage, made from fresh sugarcane.",
        price:20
    },
    {
        id:39,
        image:"assets/imgs/Aloe Vera Drink.jpeg",
        title:"Aloe Vera Drink",
        description:"A beverage made from aloe vera gel, typically flavored with fruits and sweetened.",
        price:35
    },
    {
        id:40,
        image:"assets/imgs/Teh Tarik.webp",
        title:"Teh Tarik",
        description:"black tea mixed with sweetened milk, pulled to create a frothy top.",
        price:29
    },
    {
        id:41,
        image:"assets/imgs/Calpis.jpg" ,
        title:"Calpis",
        description:"A slightly tangy dairy beverage made from fermented milk.",
        price:25
    },

]


localStorage.setItem("list_plat",JSON.stringify(list_plat))


// console.log(list_plat2)



function addToCart(itemId) {
    // Find the object with the given id from the list_plat array
    const clickedObject = list_plat.find(item => item.id === itemId);

    if (clickedObject) {

        console.log("Added to storage:", clickedObject);
        localStorage.setItem("list_plat", JSON.stringify(clickedObject));
        console.log(localStorage)
    } else {
        console.log("not found.");
    }
}


function addToPersonalize(itemId) {
    // Find the object with the given id from the list_plat array
    const clickedObject = list_plat.find(item => item.id === itemId);

    if (clickedObject) {

        console.log("Added to storage:", clickedObject);
        localStorage.setItem("list_plat", JSON.stringify(clickedObject));
        console.log(localStorage)
    } else {
        console.log("not found.");
    }
}













