//Task 1: Business Dashboard – DOM Element Selection and Creation
//Use both document.getElementById and document.querySelector to select the dashboard container.
const dashboard = document.getElementById("dashboard");
const dashboardSelector = document.querySelector('#dashboard');

//Create a new <div> element using createElement to represent the metric card.
const revenueCard = document.createElement("div");
//Assigning a class via setAttribute
revenueCard.setAttribute("class", "metric-card");
//Assign an ID to Revenue Card
revenueCard.setAttribute("id", "revenue-card");
//Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
revenueCard.innerHTML = `
<h3>Revenue</h3><p>$0</p>`;
//Append the new metric card to the dashboard container using appendChild.
dashboardId.appendChild(revenueCard);


//Task 2 - Updated Metric Cards via Array Conversion
//Use document.querySelectorAll to select all elements with the class "metric-card".
const metricCards = document.querySelectorAll(".metric-card");
//Convert the resulting NodeList into an array (using Array.from or the spread operator).
const metricCardArray = Array.from(metricCardList);
//Use an array method such as .forEach() to update each card’s inner text 
metricCardArray.forEach(card => { 
    card.textContent += " - Updated"; 
    card.setAttribute("style", "background-color: blue;"); 
});


//Task 3 - Implemented Dynamic Inventory List
function addProduct(ProductName) {
    const inventoryList = document.getElementById("inventoryList");
    const ProductItem = document.createElement("li");
 //Use setAttribute to add a class (e.g., "product-item") 
    ProductItem.setAttribute("class", "product-item");
    ProductItem.setAttribute("product-info", productName);
    ProductItem.innerText = productName;
    
// Add click event to remove item
    ProductItem.addEventListener("click", function() {
        removeProductItem(ProductItem);
    });
     inventoryList.appendChild(ProductItem);
};
//Use removeChild within the inventory list to remove the clicked item.
function removeProductItem(ProductItem) {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.removeChild(ProductItem);
  };
  //Add a button that calls your “add” function should add a new product item to the inventory list.
  document.getElementById("addProductButton").addEventListener("click here", () => {
    addProductItem("New Product Item");
  })

  //Task 4 - Demonstrated Event Bubbling in Customer Section
  //Create a nested structure: a parent container with the id "customerSection" and multiple child elements with the class "customer-card".
  const customerSection = document.getElementById("customerSection");
  //Attach click event listeners to the parent container.
  customerSection.addEventListener("click here", () => {
    console.log("Customer Selected");
});
////Attach click event listeners to  each customer card
const customerCards = document.getElementsByClassName("customer-card");
customerCards.forEach((card) => {
card.addEventListener("click here", (event) => {
    console.log(`Clicked `);
    event.stopPropagation();
});  
});
