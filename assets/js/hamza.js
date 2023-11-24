// Basket
let personalizedPlateToBasketPrimary = localStorage.getItem("personalizedPlateBasket");
let itemsToBasket = JSON.parse(localStorage.getItem('foodItems'));
let personalizedPlateToBasket = JSON.parse(personalizedPlateToBasketPrimary)

// Basket


document.addEventListener('DOMContentLoaded', function() {
    const validButton = document.querySelector('.boton');
    const dropdowns = document.querySelectorAll('.adding select');
    const firstBordered = document.querySelector('.personalization .element');

    validButton.addEventListener('click', function() {
        let dropdownText = '';

        // Gather the selected values from all dropdowns
        dropdowns.forEach(dropdown => {
            dropdownText += dropdown.options[dropdown.selectedIndex].text + " / ";
            // Reset the dropdown selections to the default option
            dropdown.selectedIndex = 0;
        });

        // Create a new paragraph element
        const newText = document.createElement('p');
        newText.textContent = dropdownText;

        // Append the new text to the first bordered element
        firstBordered.appendChild(newText);
    });
});

    // Get the BUY NOW button element
const buyNowButton = document.querySelector('.buy');
const confirmationMessage = document.getElementById('confirmationMessage');

// Function to handle the redirection when clicking the button
function navigateToPage() {
    confirmationMessage.style.display = 'block'; // Show confirmation message

    // Hide the message after 10 seconds
    setTimeout(function() {
        confirmationMessage.style.display = 'none';
    }, 3000);

    // For demonstration purposes, you may keep the redirection, or remove it as needed
    // window.location.href = window.location.href; // Redirects to the same page
}

// Add event listener to the button
buyNowButton.addEventListener('click', navigateToPage);   



// function addToPlate() {
//     const sauces = document.getElementById('saucesInput').value;
//     const size = document.getElementById('sizeInput').value;
//     const extraItems = document.getElementById('extraItemsInput').value;

    // Display the input data in the Personalization section
    // document.getElementById('displaySauces').innerText = "test+++++" + sauces;
    // document.getElementById('displaySize').innerText = size;
    // document.getElementById('displayExtraItems').innerText = extraItems;

    // Log the data to the console
    // console.log('Sauces:', sauces);
    // console.log('Size:', size);
    // console.log('Extra Items:', extraItems);


    // Basket
    // console.log(personalizedPlateToBasket.sauce);
    // personalizedPlateToBasket.sauce = sauces;
    // personalizedPlateToBasket.size = size;
    // personalizedPlateToBasket.extra_items = extraItems;
    // Basket


// }
function calculateTotalPrice() {
    const souceInput = document.getElementById('souceInput');
    const sizeInput = document.getElementById('sizeInput');
    const extraInput = document.getElementById('extraInput');

    const selectedSaucePrice = parseFloat(souceInput.options[souceInput.selectedIndex].getAttribute('data-price')) || 0;
    const selectedSizePrice = parseFloat(sizeInput.options[sizeInput.selectedIndex].getAttribute('data-price')) || 0;
    const selectedExtraPrice = parseFloat(extraInput.options[extraInput.selectedIndex].getAttribute('data-price')) || 0;

    const totalPrice = selectedSaucePrice + selectedSizePrice + selectedExtraPrice;
    
    document.getElementById('totalPrice').textContent = totalPrice;

}






          // Retrieve personalized plate data from localStorage
          const personalizedPlateData = localStorage.getItem("personalizedPlate");

          // Parse the JSON string back to an object
          const personalizedPlate = JSON.parse(personalizedPlateData);
          
          // Get elements by their IDs
          const titleElement = document.getElementById("title1");
          const descriptionElement = document.getElementById("description1");
          const priceElement = document.getElementById("price1");
          const imageElement = document.querySelector(".plat-div-d img");
          
          // Check if elements exist before populating
          if (
            personalizedPlate &&
            titleElement &&
            descriptionElement &&
            priceElement &&
            imageElement
          ) {
            // Populate the elements with personalized plate data
            titleElement.textContent = personalizedPlate.title;
            descriptionElement.textContent = personalizedPlate.description;
            priceElement.textContent = personalizedPlate.price;
            imageElement.src = personalizedPlate.imageSrc;
          }
          

function calculateTotalPrice() {
    // Get selected values from the dropdowns
    const selectedSauce = document.getElementById("souceInput").value;
    const selectedSize = document.getElementById("sizeInput").value;
    const selectedExtra = document.getElementById("extraInput").value;






    // Get the prices of the selected items
    const saucePrice = parseInt(document.getElementById("souceInput").options[document.getElementById("souceInput").selectedIndex].getAttribute("data-price"));
    const sizePrice = parseInt(document.getElementById("sizeInput").options[document.getElementById("sizeInput").selectedIndex].getAttribute("data-price"));
    const extraPrice = parseInt(document.getElementById("extraInput").options[document.getElementById("extraInput").selectedIndex].getAttribute("data-price"));

    // Calculate the total price
    const totalPrice = saucePrice + sizePrice + extraPrice;

    // Basket
    personalizedPlateToBasket.sauce = selectedSauce;
    personalizedPlateToBasket.size = selectedSize;
    personalizedPlateToBasket.extra_items = selectedExtra;
    personalizedPlateToBasket.price = totalPrice;
    // Basket

    // Create new elements to append
    const description = document.createElement("p");
    description.textContent = `Sauce: ${selectedSauce}, Size: ${selectedSize}, Extra: ${selectedExtra}`;

    const price = document.createElement("p");
    price.textContent = `Total Price: ${totalPrice} DH`;

    // Append the new content to the existing section
    const descriptionDiv = document.querySelector(".plat-div-d .description-div");
    descriptionDiv.appendChild(description);
    descriptionDiv.appendChild(price);
}



// Basket
document.getElementById("dataInput").addEventListener("click", function() {
    itemsToBasket.push(personalizedPlateToBasket);
    localStorage.setItem('foodItems', JSON.stringify(itemsToBasket));
})
// Basket