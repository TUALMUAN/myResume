// JavaScript code to animate the website title

var myPhotos = [
  "https://cdn.tualkhanmuan.com/Web-Images-main/2023myPhoto.jpg",
  "https://cdn.tualkhanmuan.com/Web-Images-main/2025.2.15_Photo%203.jpg"
];

var index = 0;
function updateMyPhotos() {
  var img = document.getElementById("myPhotos");
  img.src = myPhotos[index];
  index++;
  if (index == myPhotos.length) index = 0;
}
updateMyPhotos();
setInterval(updateMyPhotos, 2000);

// Slideshow of Certificates
var certificates = [
  "https://cdn.tualkhanmuan.com/Web-Images-main/Executive%20Diploma%20in%20Business%20Management.jpg",
  "https://cdn.tualkhanmuan.com/Web-Images-main/Tual%20Muan%20Certificate%20of%20Google%20Digital%20Skills.jpg",
  "https://cdn.tualkhanmuan.com/Web-Images-main/Intermediate%20JavaScript%20Certificate.jpg"
];

var certIndex = 0;
function updateImage() {
  var img = document.getElementById("certificates");
  img.src = certificates[certIndex];
  certIndex++;
  if (certIndex == certificates.length) certIndex = 0;
}
updateImage();
setInterval(updateImage, 3000);

// Slideshow of Photos
var photos = [
  "https://cdn.tualkhanmuan.com/Web-Images-main/Copy%20of%20myphoto.jpg",
  "https://cdn.tualkhanmuan.com/Web-Images-main/2025.2.15_Photo%202.jpg",
  "https://cdn.tualkhanmuan.com/Web-Images-main/Copy%20of%20myphoto0001.jpg"
];

// Preload images
photos.forEach(function(photo) {
  var img = new Image();
  img.src = photo;
});

var photoIndex = 0;
function updatePhotos() {
  var img = document.getElementById("photos");
  img.src = photos[photoIndex];
  photoIndex++;
  if (photoIndex == photos.length) photoIndex = 0;
}
updatePhotos();
setInterval(updatePhotos, 2000);

// Slideshow of Awards
var awards = [
  "https://cdn.tualkhanmuan.com/Web-Images-main/graduation%20day.jpg",
  "https://cdn.tualkhanmuan.com/Web-Images-main/tualMuan058's%20profile%20_%20Codecademy%20HTML.jpg",
  "https://cdn.tualkhanmuan.com/Web-Images-main/Intermediate%20JavaScript%20Certificate.jpg"
];

var awardIndex = 0;
function updateAwards() {
  var img = document.getElementById("awards");
  img.src = awards[awardIndex];
  awardIndex++;
  if (awardIndex == awards.length) awardIndex = 0;
}
updateAwards();
setInterval(updateAwards, 3000);

// Scroll button
window.onscroll = function() { scrollFunction() };
function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  scrollBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Form handling with Fetch API
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formResponse");
async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.set("_replyto", form.elements.email.value);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: { Accept: "application/json" },
      body: formData
    });
    const text = await response.text();
    if (response.ok) {
      statusEl.style.color = "#00a878";
      statusEl.textContent = "✅ Message sent successfully! Thank you for reaching out.";
      form.reset();
    } else {
      let json;
      try { json = JSON.parse(text); } catch {}
      statusEl.style.color = "red";
      statusEl.textContent = json?.errors ? json.errors.map(e => e.message).join(", ") : "❌ There was an error submitting the form. Try again.";
    }
  } catch (err) {
    statusEl.style.color = "red";
    statusEl.textContent = "❌ Submission failed due to network error.";
  }
}
form.addEventListener("submit", handleSubmit);

// Dark Mode
const themeToggle = document.getElementById('darkMode');
const modeLabel = document.getElementById('modeLabel');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    themeToggle.src = "https://cdn.tualkhanmuan.com/Web-Images-main/nightMode.png";
    modeLabel.textContent = "Dark Mode";
  } else {
    localStorage.setItem('darkMode', 'disabled');
    themeToggle.src = "https://cdn.tualkhanmuan.com/Web-Images-main/dayMode.png";
    modeLabel.textContent = "Light Mode";
  }
}

// Initialize theme
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  themeToggle.src = "https://cdn.tualkhanmuan.com/Web-Images-main/nightMode.png";
  modeLabel.textContent = "Dark Mode";
} else {
  themeToggle.src = "https://cdn.tualkhanmuan.com/Web-Images-main/dayMode.png";
  modeLabel.textContent = "Light Mode";
}

themeToggle.addEventListener('click', toggleTheme);
modeLabel.addEventListener('click', toggleTheme);

// Dynamically load Supabase SDK
(async () => {
  const loadSupabase = () => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const onDomReady = () => new Promise(resolve => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else resolve();
  });

  await onDomReady();
  await loadSupabase();

  document.body.style.overflow = 'hidden';

  const supabaseUrl = 'https://hdsepxgoerejvtvzqpil.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
  const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

  const loginForm = document.querySelector('.login-box');
  const pinInput = document.getElementById('pin-input');
  if (!loginForm || !pinInput) return;

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pin = pinInput.value.trim();
    if (!pin) return alert("Please enter a PIN.");

    try {
      const { data, error } = await supabaseClient.from('users').select('*').eq('pin', pin).maybeSingle();
      if (error) return alert("Supabase error: " + error.message);
      if (data) {
        alert("Login successful! Welcome to My Personal Website.");
        document.getElementById('login-form').style.display = 'none';
        document.body.style.overflow = 'auto';
      } else alert("Invalid PIN. Please try again.");
    } catch (err) {
      alert("Unexpected error: " + err.message);
    }
  });
})();
