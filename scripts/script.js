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

// Table of content JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toc-button");
  const tables = document.querySelectorAll(".toc-content .table");
  const tocButtonsContainer = document.querySelector(".toc-buttons-container");
  let isDown = false;
  let startX;
  let scrollLeft;

  tocButtonsContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    tocButtonsContainer.classList.add("active");
    startX = e.pageX - tocButtonsContainer.offsetLeft;
    scrollLeft = tocButtonsContainer.scrollLeft;
  });

  tocButtonsContainer.addEventListener("mouseleave", () => {
    isDown = false;
    tocButtonsContainer.classList.remove("active");
  });

  tocButtonsContainer.addEventListener("mouseup", () => {
    isDown = false;
    tocButtonsContainer.classList.remove("active");
  });

  tocButtonsContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tocButtonsContainer.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    tocButtonsContainer.scrollLeft = scrollLeft - walk;
  });

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      this.classList.add("active");

      // Hide all tables
      tables.forEach((table) => table.classList.remove("active"));
      // Show the target table
      const targetTable = document.querySelector(this.dataset.target);
      targetTable.classList.add("active");
    });
  });
});
