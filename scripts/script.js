// Get all the buttons with the class "btn-primary"
const buttons = document.querySelectorAll(".btn-primary");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the chevron icons within the button
    const chevronDown = button.querySelector(".fa-chevron-down");
    const chevronUp = button.querySelector(".fa-chevron-up");

    // Toggle the visibility of the chevron icons
    chevronDown.classList.toggle("d-none");
    chevronUp.classList.toggle("d-none");
  });
});

// ----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // You can adjust the scroll threshold as needed
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// Contact page javascript by (https://codepen.io/codewithshabbir)
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentNode.classList.add("focus");
    });

    input.addEventListener("blur", () => {
      if (input.value === "") {
        input.parentNode.classList.remove("focus");
      }
    });
  });
});
