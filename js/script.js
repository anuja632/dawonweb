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