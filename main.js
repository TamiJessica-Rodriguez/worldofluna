document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const contactIcon = document.getElementById("contactIcon");
  const contactForm = document.getElementById("contactForm");

  if (contactIcon && contactForm) {
    contactIcon.addEventListener("click", function () {
      console.log("Contact icon clicked");
      if (
        contactForm.style.display === "none" ||
        contactForm.style.display === ""
      ) {
        contactForm.style.display = "block";
      } else {
        contactForm.style.display = "none";
      }
    });
  }
});
