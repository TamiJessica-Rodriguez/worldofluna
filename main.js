// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM fully loaded and parsed");
//   const contactIcon = document.getElementById("contactIcon");
//   const contactForm = document.getElementById("contactForm");

//   if (contactIcon && contactForm) {
//     contactIcon.addEventListener("click", function () {
//       console.log("Contact icon clicked");
//       if (
//         contactForm.style.display === "none" ||
//         contactForm.style.display === ""
//       ) {
//         contactForm.style.display = "block";
//       } else {
//         contactForm.style.display = "none";
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const contactIcon = document.getElementById("contactIcon");
  const contactForm = document.getElementById("contactForm");
  const overlay = document.createElement("div");

  overlay.id = "overlay";
  document.body.appendChild(overlay);

  if (contactIcon && contactForm) {
    contactIcon.addEventListener("click", function () {
      console.log("Contact icon clicked");
      contactForm.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
      contactForm.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  $(".carousel").slick({
    infinite: true,
    slidesToShow: 3, // Antalet boxar som ska visas samtidigt
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, // Lägg till prickar för att visa hur många bilder det finns
    arrows: true, // Lägg till navigeringspilar
    responsive: [
      {
        breakpoint: 768, // För mobiler
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // För surfplattor
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}


