
// Get data from the basket
const food_items_list = JSON.parse(localStorage.getItem('foodItems'));

var table = document.getElementById("table");

// ajouter les lignes dans tableau
var total = 0
food_items_list.forEach((plate) => {
    var itemContainer = document.createElement("tr");
    total += plate.price*plate.quantity
    ht = plate.price/(1+20/100)
    tva = plate.price - ht

    itemContainer.innerHTML = `
    <tr>
        <td>${plate.title}</td>
        <td>${plate.quantity}</td>
        <td>${ht.toFixed(2)}</td>
        <td>${plate.price}</td>
    </tr>
    `;
    table.appendChild(itemContainer);
});

//ajouter total dans table
var itemContainer = document.createElement("tr");

itemContainer.innerHTML = `
    <td class="no-border-right"> </td>
    <td class="no-border-left no-border-right"> </td>
    <td class="no-border-left no-border-right">Total: </td>
    <td class="no-border-left">${total} dh</td>
`;
table.appendChild(itemContainer);


//------------------------------ retourner la date actuelle :--------------------------------


    // Sélectionnez l'élément avec l'ID "date"
    var dateElement = document.getElementById("date");
  
    // Obtenir la date actuelle
    var currentDate = new Date();
  
    // Formatez la date comme vous le souhaitez
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString(undefined, options);
  
    // Affichez la date dans l'élément HTML
    dateElement.textContent = "Le : " + formattedDate;



// -----------------------------------------imprimer fucntion :-----------------------------------
    function imprimerPage() {
        const elementsToHide = document.querySelectorAll('.no-print');
        elementsToHide.forEach(element => {
            element.style.display = 'none';
        });
        const parag = document.querySelectorAll('.parag');
        parag.forEach(element => {
            element.style.fontSize = "15px";
        });

        window.print();

        // Rétablit l'affichage initial
        elementsToHide.forEach(element => {
            element.style.display = 'block';
        });
    }



//---------------------------------vider le panier et afficher message oncklic sur le button checkout :--------------------

    const div = document.getElementById('message')

    function clear_basket(){
        localStorage.removeItem('foodItems');
        // location.reload();
        const text = document.createElement('p');
        text.innerHTML ="Meci, votre commande est validée";
        div.appendChild(text);
    }


 
