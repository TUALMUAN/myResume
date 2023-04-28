
      var titleElement = document.getElementById('website-title');
      var translateY = -20;
      function animateTitle() {
          titleElement.style.transform = 'translate(-50%, -50%) translateY(' + translateY + 'px)';
          translateY = -translateY;
          setTimeout(function() {
              animateTitle();
          }, 2000);
      }
      animateTitle();