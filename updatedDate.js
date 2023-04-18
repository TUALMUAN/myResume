
// Get the current date
// Get the current date object
const currentDate = new Date();

// Define an array of month names
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Get the day, month, and year from the current date object
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const year = currentDate.getFullYear();

// Get the month name from the array using the month index
const monthName = monthNames[monthIndex];

// Construct the date string in the format "dd MMM, yyyy"
const dateString = `${day} ${monthName}, ${year}`;

// Display the current date string in the HTML element with id "dateDisplay"
document.getElementById("dateDisplay").textContent = "Current Date: " + dateString;

