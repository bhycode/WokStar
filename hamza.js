document.addEventListener('DOMContentLoaded', function() {
    const validButton = document.querySelector('.boton');
    const inputs = document.querySelectorAll('.adding input');
    const firstBordered = document.querySelector('.personalization .element');

    validButton.addEventListener('click', function() {
        let inputText = '';

        // Gather the text from all input fields
        inputs.forEach(input => {
            inputText += input.value + " / ";
            // Clear the input fields after gathering the text
            input.value = '';
        });

        // Create a new paragraph element
        const newText = document.createElement('p');
        newText.textContent = inputText;

        // Append the new text to the first bordered element
        firstBordered.appendChild(newText);
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
}


});

