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
revenueCard.innerHTML = "
<h3>Revenue</h3><p>$0</p>";
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