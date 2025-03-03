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