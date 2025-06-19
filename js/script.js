//  document.addEventListener("DOMContentLoaded", function () {
//     const trigger = document.querySelector(".dropdown-toggle-trigger");
//     const dropdown = trigger.closest(".dropdown");
//     const dropdownMenu = dropdown.querySelector(".canvas-dropdown");

//     trigger.addEventListener("click", function (e) {
//       if (window.innerWidth < 1440) {
//         e.preventDefault();
//         dropdown.classList.toggle("show");
//         dropdownMenu.classList.toggle("show");
//       }
//     });

//     // Close menu if clicking outside
//     document.addEventListener("click", function (e) {
//       if (!dropdown.contains(e.target)) {
//         dropdown.classList.remove("show");
//         dropdownMenu.classList.remove("show");
//       }
//     });
//   });

   $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        items: 1,
        animateOut: "fadeOut",
        smartSpeed: 800,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ]
      });
    });
      function startSlider(container) {
    const images = container.querySelectorAll("img");
    const bars = container.querySelectorAll(".slider-progress span .fill");
    let index = 0;

    container._timers = [];

    const show = (i) => {
      images.forEach((img, idx) => img.classList.toggle("active", idx === i));
      bars.forEach((fill, idx) => {
        fill.style.width = "0%";
        if (idx === i) {
          // trigger fill animation
          setTimeout(() => fill.style.width = "100%", 10);
        }
      });
    };

    show(index);

    function next() {
      index++;
      if (index < images.length) {
        show(index);
        const t = setTimeout(next, 1000);
        container._timers.push(t);
      }
    }

    const t = setTimeout(next, 1000);
    container._timers.push(t);
  }

  function stopSlider(container) {
    const images = container.querySelectorAll("img");
    const bars = container.querySelectorAll(".slider-progress span .fill");

    images.forEach((img, i) => img.classList.toggle("active", i === 0));
    bars.forEach(fill => fill.style.width = "0%");

    if (container._timers) {
      container._timers.forEach(t => clearTimeout(t));
      container._timers = [];
    }
  }



   const images = {
    steel: document.getElementById('img-steel'),
    aluminum: document.getElementById('img-aluminum'),
    spring: document.getElementById('img-spring'),
    carbon: document.getElementById('img-carbon'),
  };

  document.querySelectorAll('#materialTabs .nav-link').forEach(tab => {
    tab.addEventListener('shown.bs.tab', function () {
      const targetId = this.getAttribute('data-bs-target').substring(1); // remove '#' from id
      // Hide all images
      Object.values(images).forEach(img => img.classList.add('d-none'));
      // Show the corresponding image
      images[targetId].classList.remove('d-none');
    });
  });
    document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
      const icon = this.querySelector('.toggle-icon');
      const expanded = this.getAttribute('aria-expanded') === 'true';

      // Reset all other icons
      document.querySelectorAll('.toggle-icon').forEach(el => el.textContent = '+');

      // Update current icon
      icon.textContent = expanded ? '+' : '–';
    });
  });