// document.addEventListener("DOMContentLoaded", () => {
//   const header = document.querySelector("#header");
//   if (header) {
//     window.onscroll = function () {
//       stickyNavbar();
//     };

//     var navbar = document.getElementById("navbar");
//     const navbaUl = document.querySelectorAll("#navbar ul");
//     var sticky = navbar.offsetTop;

//     function stickyNavbar() {
//       if (window.pageYOffset >= sticky) {
//         navbar.classList.add(
//           "fixed",
//           "top-0",
//           "left-0",
//           "w-full",
//           "bg-white",
//           "border-b"
//         );
//         navbaUl.forEach((element) => {
//           element.classList.remove("py-8");
//           element.classList.add("py-[1.5rem]");
//         });
//       } else {
//         navbar.classList.remove(
//           "fixed",
//           "top-0",
//           "left-0",
//           "w-full",
//           "bg-white",
//           "border-b"
//         );
//         navbaUl.forEach((element) => {
//           element.classList.add("py-8");
//           element.classList.remove("py-[1.5rem]");
//         });
//       }
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  if (header) {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    hamburgerBtn.addEventListener("click", () => {
      const mobileMenu = document.querySelector(".mobile-menu");
      mobileMenu.classList.toggle("translate-x-0");
      mobileMenu.classList.toggle("-translate-x-full");
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".testimonial-toppers-swiper");
  if (header) {
    var swiper = new Swiper(".testimonial-toppers-swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".testimonial-review-swiper");
  if (header) {
    var swiper = new Swiper(".testimonial-review-swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    });
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const toTopButton = document.getElementById("to-top-button");
//   if (toTopButton) {
//     window.onscroll = function () {
//       if (
//         document.body.scrollTop > 500 ||
//         document.documentElement.scrollTop > 500
//       ) {
//         toTopButton.classList.remove("hidden");
//         toTopButton.classList.add("flex");
//       } else {
//         toTopButton.classList.add("hidden");
//         toTopButton.classList.remove("flex");
//       }
//     };

//     // Function to scroll to the top of the page smoothly
//     window.goToTop = function () {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const toTopButton = document.getElementById("to-top-button");
  const header = document.querySelector("#header");
  const navbar = document.getElementById("navbar");
  const navbaUl = document.querySelectorAll("#navbar ul");
  const sticky = navbar ? navbar.offsetTop : null;

  function handleScroll() {
    if (toTopButton) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        toTopButton.classList.remove("hidden");
        toTopButton.classList.add("flex");
      } else {
        toTopButton.classList.add("hidden");
        toTopButton.classList.remove("flex");
      }
    }

    if (header && navbar) {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add(
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-white",
          "border-b"
        );
        navbaUl.forEach((element) => {
          element.classList.remove("py-8");
          element.classList.add("py-[1.5rem]");
        });
      } else {
        navbar.classList.remove(
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-white",
          "border-b"
        );
        navbaUl.forEach((element) => {
          element.classList.add("py-8");
          element.classList.remove("py-[1.5rem]");
        });
      }
    }
  }

  if (toTopButton) {
    window.goToTop = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }

  window.addEventListener("scroll", handleScroll);
});
