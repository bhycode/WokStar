// Basket
const personalizedPlateToBasket = JSON.parse(localStorage.getItem("personalizedPlate"));
const itemsToBasket = JSON.parse(localStorage.getItem('foodItems'));
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



function addToPlate() {
    const sauces = document.getElementById('saucesInput').value;
    const size = document.getElementById('sizeInput').value;
    const extraItems = document.getElementById('extraItemsInput').value;

    // Display the input data in the Personalization section
    document.getElementById('displaySauces').innerText = sauces;
    document.getElementById('displaySize').innerText = size;
    document.getElementById('displayExtraItems').innerText = extraItems;

    // Log the data to the console
    console.log('Sauces:', sauces);
    console.log('Size:', size);
    console.log('Extra Items:', extraItems);


    // Basket
    personalizedPlateToBasket.sauce = sauces;
    personalizedPlateToBasket.size = size;
    personalizedPlateToBasket.extra_items = extraItems;
    // Basket


}
function calculateTotalPrice() {
    const souceInput = document.getElementById('souceInput');
    const sizeInput = document.getElementById('sizeInput');
    const extraInput = document.getElementById('extraInput');

    const selectedSaucePrice = parseFloat(souceInput.options[souceInput.selectedIndex].getAttribute('data-price')) || 0;
    const selectedSizePrice = parseFloat(sizeInput.options[sizeInput.selectedIndex].getAttribute('data-price')) || 0;
    const selectedExtraPrice = parseFloat(extraInput.options[extraInput.selectedIndex].getAttribute('data-price')) || 0;

    const totalPrice = selectedSaucePrice + selectedSizePrice + selectedExtraPrice;
    
    document.getElementById('totalPrice').textContent = totalPrice;

    // Basket
    personalizedPlateToBasket.price = totalPrice;
    // Basket
}

// Basket
document.getElementById("dataInput").addEventListener("click", function() {
    personalizedPlateToBasket.sauce = document.getElementById("price1").innerHTML;
    itemsToBasket.push(personalizedPlateToBasket);
    localStorage.setItem('foodItems', JSON.stringify(itemsToBasket));
})
// Basket

