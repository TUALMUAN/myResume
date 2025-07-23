
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
  "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/pic%20in%20the%20office%202%20(2).jpg"
  
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

    //form handling with fetch API
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formResponse");

async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  // Optional: set reply-to for email confirmation
  formData.set("_replyto", form.elements.email.value);

  console.group("Contact Form Submission");
  console.log("Form action URL:", form.action);
  console.log("FormData entries:");
  for (let [key, val] of formData.entries()) console.log(`  ${key}: ${val}`);
  
  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: { Accept: "application/json" },
      body: formData
    });

    console.log("Response status:", response.status);
    const text = await response.text();
    console.log("Response body:", text);

    if (response.ok) {
      statusEl.style.color = "#00a878";
      statusEl.textContent = "✅ Message sent successfully! Thank you for reaching out.";
      form.reset();
    } else {
      let json;
      try { json = JSON.parse(text); } catch { }
      statusEl.style.color = "red";
      statusEl.textContent = json?.errors ?
        json.errors.map(e => e.message).join(", ") :
        "❌ There was an error submitting the form. Try again.";
    }
  } catch (err) {
    console.error("Fetch error:", err);
    statusEl.style.color = "red";
    statusEl.textContent = "❌ Submission failed due to network error.";
  }

  console.groupEnd();
}

form.addEventListener("submit", handleSubmit);

//Dark Mode

  const themeToggle = document.getElementById('darkMode');
  const modeLabel = document.getElementById('modeLabel');
  const body = document.body;

  // Shared toggle function
  function toggleTheme() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      themeToggle.src = "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/nightMode.png";
      modeLabel.textContent = "Dark Mode";
    } else {
      localStorage.setItem('darkMode', 'disabled');
      themeToggle.src = "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/dayMode.png";
      modeLabel.textContent = "Light Mode";
    }
  }

  // Initialize mode from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.src = "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/nightMode.png";
    modeLabel.textContent = "Dark Mode";
  } else {
    themeToggle.src = "https://raw.githubusercontent.com/TUALMUAN/Web-Images/main/dayMode.png";
    modeLabel.textContent = "Light Mode";
  }

  // Make both image and text clickable
  themeToggle.addEventListener('click', toggleTheme);
  modeLabel.addEventListener('click', toggleTheme);

  
// Dynamically load Supabase SDK
const loadSupabase = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Wait for DOM to load
const onDomReady = () => {
  return new Promise((resolve) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
};

// Main app logic
const initApp = async () => {
  // Disable scroll until login
  document.body.style.overflow = 'hidden';

  // Supabase credentials
  const supabaseUrl = 'https://hdsepxgoerejvtvzqpil.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhkc2VweGdvZXJlanZ0dnpxcGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NDkwOTUsImV4cCI6MjA2ODIyNTA5NX0.RRU8zQCELzeEN_hc9hcVnMZ-S58Ft-U4ZilQVMjN9ZU';
  const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

  const loginForm = document.querySelector('.login-box');
  const pinInput = document.getElementById('pin-input');

  if (!loginForm || !pinInput) {
    console.error("Login form or PIN input not found.");
    return;
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pin = pinInput.value.trim();

    if (!pin) {
      alert("Please enter a PIN.");
      return;
    }

    try {
      const { data, error } = await supabaseClient
        .from('users')
        .select('*')
        .eq('pin', pin)
        .maybeSingle();

      if (error) {
        alert("Supabase error: " + error.message);
        console.error(error);
        return;
      }

      if (data) {
        alert("Login successful! Welcome to My Personal Website.");
        document.getElementById('login-form').style.display = 'none';
        document.body.style.overflow = 'auto';
      } else {
        alert("Invalid PIN. Please try again.");
      }
    } catch (err) {
      alert("Unexpected error: " + err.message);
      console.error(err);
    }
  });
};

// Run everything
(async () => {
  try {
    await onDomReady();
    await loadSupabase();
    initApp();
  } catch (err) {
    console.error("Error initializing app:", err);
    alert("Failed to load login system.");
  }
})();


