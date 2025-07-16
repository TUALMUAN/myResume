
const overlay = document.getElementById('overlay');
const form = overlay.querySelector('form');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (passwordInput.value === '00000') {
    overlay.style.display = 'none';
  } else {
    alert('Invalid PIN. Please try again.');
  }
});

window.addEventListener('load', function() {
  overlay.classList.add('active');
});

// JavaScript code to animate the website title

var myPhotos = [

  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/2025.2.15_Photo%202.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/2025.2.15_Photo%202.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/2025.2.15_Photo%203.jpg",
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
updateMyPhotos();
setInterval(updateMyPhotos, 2000);


//slideshow of Certificates

var certificates = [
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/tualMuan058's%20profile%20_%20Codecademy%20HTML.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/Tual%20Muan%20Certificate%20of%20Google%20Digital%20Skills.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/Tual-Khan-Muan-American-University-new-Cert-C1-A4-long-names-1-34-July-3-2022.jpg"
];

var index = 0;

function updateImage() {
  var img = document.getElementById("certificates");
  img.src = certificates[index];
  index++;
  if (index == certificates.length) {
    index = 0;
  }
}

// Start slideshow
updateImage(); // show first image immediately
setInterval(updateImage, 3000);

//slideshow of photos

var photos = [
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/2025.2.15_Photo%201.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/selfie%201.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/pic%20in%20the%20office%201.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/pic%20in%20the%20office%202%20(2).jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/pic%20in%20the%20office%204.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/selfie 1.jpg"
];

// Preload images
photos.forEach(function(photo) {
  var img = new Image();
  img.src = photo;
});

var number = 0;

function updatePhotos() {
  var img = document.getElementById("photos");
  img.src = photos[number];
  number++;
  if (number == photos.length) {
    number = 0;
  }
}

updatePhotos(); // Show the first photo immediately
setInterval(updatePhotos, 2000); // Change every 2 seconds

// Slideshow of Awards
var awards = [
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/Intermediate%20JavaScript%20Certificate.jpg",
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/tualMuan058's%20profile%20_%20Codecademy%20HTML.jpg"
];

var num = 0;

function updateAwards() {
  var img = document.getElementById("awards");
  img.src = awards[num];
  num++;
  if (num == awards.length) {
    num = 0;
  }
}
updateAwards(); // show first award immediately
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

    
