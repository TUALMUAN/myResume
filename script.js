

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


// JavaScript code to animate the website title

//slideshow of Certificates

var certificates = [
  "https://drive.google.com/uc?id=1L1ZIIAiVofPTNghzwEz9HDp-OQyHMTia",
  "https://drive.google.com/uc?id=1DGCCoxK7DU6F34msMnqk2tCme3H3i99C",
  "https://drive.google.com/uc?id=15WRjkj24IAIlOemi1vVUNosxiI8b5z9_",
  "https://drive.google.com/uc?id=1YBGJijyR6Q8dS7XKUMhqyy3eW4pX7VcO"
   ];
   
var index = 0;

function updateImage() {
  var img = document.getElementById("slideCertificates");
  img.src = certificates[index];
  index++;
  if (index == certificates.length) {
    index = 0;
  }
}

setInterval(updateImage, 3000);

//slideshow of photos

var photos = [
  "https://drive.google.com/uc?id=1vQREWnsRUl1qcyBVjXHMwKgvSKxD7GgV",
  "https://drive.google.com/uc?id=1hdKuVQtmcMmHctWMA3XomwvfUbHqmaR8",
  "https://drive.google.com/uc?id=1_wf9hgeYr4_9Y7DPZQ_LSur3fJSiB6O_",
  "https://drive.google.com/uc?id=19ZKcwQHjjW1KjfSHBVSITfmnPqyncv1Y"
   ];
   https://drive.google.com/file/d/1vQREWnsRUl1qcyBVjXHMwKgvSKxD7GgV/view?usp=share_link 
var number = 0;

function updatePhotos() {
  var img = document.getElementById("slideshow");
  img.src = photos[number];
  number++;
  if((number) == photos.length) {
    number = 0;
  }
}

setInterval(updatePhotos, 3000);

//slideshow of Awards

var awards = [
  "https://drive.google.com/uc?id=1gkjR8D7tS3UZcYLNNkYSKZyZPZ6GiUR6",
  "https://drive.google.com/uc?id=1CVyaT6eX5Clpx4VJ3RIHlJBhDA8aF8e_",
  "https://drive.google.com/uc?id=1DD7hDNYGnVDlE7prsMzq-p-mZZXhbw68"
   ];
   
var num = 0;

function updateAwards() {
  var img = document.getElementById("awards");
  img.src = awards[num];
  num++;
  if((num) == awards.length) {
    num = 0;
  }
}

setInterval(updateAwards, 3000);
