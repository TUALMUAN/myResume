document.addEventListener("DOMContentLoaded", () => {
  // ============================================================
  // SLIDESHOWS
  // ============================================================

  // My Photos
  const myPhotos = [
    "https://cdn.tualkhanmuan.com/Web-Images-main/2025.2.15_Photo%203.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/2025.2.15_Photo%202.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/photo%20in%20coat.jpg"
  ];

  let index = 0;
  const myPhotosImg = document.getElementById("myPhotos");

  if (myPhotosImg) {
    setInterval(() => {
      index = (index + 1) % myPhotos.length;
      myPhotosImg.src = myPhotos[index];
    }, 2000);
  }


  // Certificates
  const certificates = [
    "https://cdn.tualkhanmuan.com/Web-Images-main/Executive%20Diploma%20in%20Business%20Management.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/Tual%20Muan%20Certificate%20of%20Google%20Digital%20Skills.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/Intermediate%20JavaScript%20Certificate.jpg"
  ];

  let certIndex = 0;
  const certImg = document.getElementById("certificates");

  if (certImg) {
    setInterval(() => {
      certIndex = (certIndex + 1) % certificates.length;
      certImg.src = certificates[certIndex];
    }, 3000);
  }


  // Photos
  const photos = [
    "https://cdn.tualkhanmuan.com/Web-Images-main/Copy%20of%20myphoto.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/2025.2.15_Photo%202.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/Copy%20of%20myphoto0001.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/2023myPhoto.jpg"
  ];

  // Preload images
  photos.forEach(photo => {
    const img = new Image();
    img.src = photo;
  });

  let photoIndex = 0;
  const photosImg = document.getElementById("photos");

  if (photosImg) {
    setInterval(() => {
      photoIndex = (photoIndex + 1) % photos.length;
      photosImg.src = photos[photoIndex];
    }, 2000);
  }


  // Awards
  const awards = [
    "https://cdn.tualkhanmuan.com/Web-Images-main/graduation%20day.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/tualMuan058's%20profile%20_%20Codecademy%20HTML.jpg",
    "https://cdn.tualkhanmuan.com/Web-Images-main/Intermediate%20JavaScript%20Certificate.jpg"
  ];

  let awardIndex = 0;
  const awardsImg = document.getElementById("awards");

  if (awardsImg) {
    setInterval(() => {
      awardIndex = (awardIndex + 1) % awards.length;
      awardsImg.src = awards[awardIndex];
    }, 3000);
  }


  // ============================================================
  // SCROLL BUTTON
  // ============================================================

  const scrollBtn = document.getElementById("scrollBtn");

  window.addEventListener("scroll", () => {
    if (!scrollBtn) return;

    const yOffset = window.scrollY;

    scrollBtn.style.display = yOffset > 20 ? "block" : "none";
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  // ============================================================
  // FORM HANDLING
  // ============================================================

  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      if (form.elements.email) {
        formData.set("_replyto", form.elements.email.value);
      }

      try {
        const response = await fetch(form.action, {
          method: form.method,
          headers: {
            Accept: "application/json"
          },
          body: formData
        });

        if (response.ok) {
          if (statusEl) {
            statusEl.style.color = "#00a878";
            statusEl.textContent =
              "✅ Message sent successfully! Thank you for reaching out.";
          }

          form.reset();
        } else {
          const text = await response.text();

          let json;

          try {
            json = JSON.parse(text);
          } catch {
            json = null;
          }

          if (statusEl) {
            statusEl.style.color = "red";

            statusEl.textContent = json?.errors
              ? json.errors
                  .map(err => err.message)
                  .join(", ")
              : "❌ There was an error submitting the form. Try again.";
          }
        }
      } catch (err) {
        if (statusEl) {
          statusEl.style.color = "red";
          statusEl.textContent =
            "❌ Submission failed due to network error.";
        }
      }
    });
  }


  // ============================================================
  // DARK MODE
  // ============================================================

  const themeToggle = document.getElementById("darkMode");
  const modeLabel = document.getElementById("modeLabel");
  const body = document.body;

  function toggleTheme() {
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");

    localStorage.setItem(
      "darkMode",
      isDark ? "enabled" : "disabled"
    );

    if (themeToggle) {
      themeToggle.src = isDark
        ? "https://cdn.tualkhanmuan.com/Web-Images-main/nightMode.png"
        : "https://cdn.tualkhanmuan.com/Web-Images-main/dayMode.png";
    }

    if (modeLabel) {
      modeLabel.textContent = isDark
        ? "Dark Mode"
        : "Light Mode";
    }
  }


  // Restore saved theme
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");

    if (themeToggle) {
      themeToggle.src =
        "https://cdn.tualkhanmuan.com/Web-Images-main/nightMode.png";
    }

    if (modeLabel) {
      modeLabel.textContent = "Dark Mode";
    }
  } else {
    if (themeToggle) {
      themeToggle.src =
        "https://cdn.tualkhanmuan.com/Web-Images-main/dayMode.png";
    }

    if (modeLabel) {
      modeLabel.textContent = "Light Mode";
    }
  }


  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  if (modeLabel) {
    modeLabel.addEventListener("click", toggleTheme);
  }


  // ============================================================
  // SUPABASE LOGIN
  // KEPT HERE AS COMMENTS
  // ============================================================

  /*
  (async () => {

    const loadSupabase = () =>
      new Promise((resolve, reject) => {

        const script = document.createElement("script");

        script.src =
          "https://cdn.jsdelivr.net/npm/@supabase/supabase-js";

        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
      });


    await loadSupabase();


    const supabaseUrl =
      "https://hdsepxgoerejvtvzqpil.supabase.co";


    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiIsImhkc2VweGdvZXJlanZ0dnpxcGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NDkwOTUsImV4cCI6MjA2ODIyNTA5NX0.RRU8zQCELzeEN_hc9hcVnMZ-S58Ft-U4ZilQVMjN9ZU";


    const supabaseClient =
      supabase.createClient(
        supabaseUrl,
        supabaseKey
      );


    const loginForm =
      document.querySelector(".login-box");


    const pinInput =
      document.getElementById("pin-input");


    if (!loginForm || !pinInput) return;


    loginForm.addEventListener("submit", async (e) => {

      e.preventDefault();


      const pin =
        pinInput.value.trim();


      if (!pin) {
        return alert("Please enter a PIN.");
      }


      try {

        const { data, error } =
          await supabaseClient
            .from("users")
            .select("*")
            .eq("pin", pin)
            .maybeSingle();


        if (error) {
          return alert(
            "Supabase error: " +
            error.message
          );
        }


        if (data) {

          alert(
            "Login successful! Welcome to My Personal Website."
          );


          const loginContainer =
            document.getElementById("login-form");


          if (loginContainer) {
            loginContainer.style.display = "none";
          }


          document.body.style.overflow = "auto";

        } else {

          alert("Invalid PIN. Please try again.");

        }

      } catch (err) {

        alert(
          "Unexpected error: " +
          err.message
        );

      }

    });

  })();
  */


  // ============================================================
  // FORCE PAGE SCROLLING
  // ============================================================
  // This prevents accidental JavaScript/CSS overflow locking
  // from keeping the page stuck after the page loads.

  document.documentElement.style.overflowY = "auto";
  document.body.style.overflowY = "auto";

});
