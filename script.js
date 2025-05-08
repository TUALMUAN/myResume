
const overlay = document.getElementById('overlay');
const form = overlay.querySelector('form');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (passwordInput.value === '058724') {
    overlay.style.display = 'none';
  } else {
    alert('Invalid PIN. Please try again.');
  }
});

window.addEventListener('load', function() {
  overlay.classList.add('active');
});

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
document.getElementById("dateDisplay").textContent = "Last Updated Date: " + dateString;


// JavaScript code to animate the website title

var myPhotos = [

  "https://github.com/TUALMUAN/Web-Images/blob/main/2025.2.15_Photo%204.jpg?raw=true",
   ];
   
var index = 0;

function updateMyPhotos() {
  var img = document.getElementById("myPhotos");
  img.src = myPhotos[index];
  index++;
  if (index == myPhotos.length) {
    index = 0;
  }
}

setInterval(updateMyPhotos, 3000);


//slideshow of Certificates

var certificates = [
  "https://github.com/TUALMUAN/Web-Images/blob/main/Intermediate%20JavaScript%20Certificate.jpg?raw=true",
  "https://github.com/TUALMUAN/Web-Images/blob/main/tualMuan058's%20profile%20_%20Codecademy%20HTML.jpg?raw=true",
  "https://github.com/TUALMUAN/Web-Images/blob/main/Tual%20Muan%20Certificate%20of%20Google%20Digital%20Skills.jpg?raw=true",
  "https://github.com/TUALMUAN/Web-Images/blob/main/Tual-Khan-Muan-American-University-new-Cert-C1-A4-long-names-1-34-July-3-2022.jpg?raw=true"
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
  "https://github.com/TUALMUAN/Web-Images/blob/main/2025.2.15_Photo%201.jpg?raw=true",
  "https://github.com/TUALMUAN/Web-Images/blob/main/2025.2.15_Photo%202.jpg?raw=true",
  "https://github.com/TUALMUAN/Web-Images/blob/main/2025.2.15_Photo%204.jpg?raw=true",
  "https://github.com/TUALMUAN/Web-Images/blob/main/2025.2.15_Photo%204.jpg?raw=true"
   ];
   
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
  "https://github.com/TUALMUAN/Web-Images/blob/main/Intermediate%20JavaScript%20Certificate.jpg?raw=true",
  "https://github.com/TUALMUAN/Web-Images/blob/main/tualMuan058's%20profile%20_%20Codecademy%20HTML.jpg?raw=true"
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

window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
      var scrollBtn = document.getElementById("scrollBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    }

    // Scroll to the top of the document when the button is clicked
    function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    
