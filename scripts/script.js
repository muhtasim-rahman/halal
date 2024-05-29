//* Navbar opacity decrease when the page is scrolling

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

//* Banner input reset button script
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("subscribe");
  const resetButton = document.querySelector(".reset-btn-icon");

  // Initialize the reset button visibility based on the input field value
  function toggleResetButton() {
    if (emailInput.value.trim() !== "") {
      resetButton.style.display = "inline-block";
    } else {
      resetButton.style.display = "none";
    }
  }

  // Attach event listeners
  emailInput.addEventListener("input", toggleResetButton);
  resetButton.addEventListener("click", function () {
    emailInput.value = ""; // Clear the input field
    toggleResetButton(); // Update the button visibility
  });

  // Initial check
  toggleResetButton();
});

//* Contact page javascript by (https://codepen.io/codewithshabbir)
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

//* Table of content JavaScript
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

//* TOC data pop-up
document.addEventListener("DOMContentLoaded", function () {
  const popupButtons = document.querySelectorAll(".popup-button");
  const popups = document.querySelectorAll(".popup");
  const popupCloses = document.querySelectorAll(".popup-close");

  popupButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const popupId = this.getAttribute("data-popup");
      document.getElementById(popupId).style.display = "flex";
    });
  });

  popupCloses.forEach((close) => {
    close.addEventListener("click", function () {
      this.closest(".popup").style.display = "none";
    });
  });

  window.addEventListener("click", function (e) {
    popups.forEach((popup) => {
      if (e.target == popup) {
        popup.style.display = "none";
      }
    });
  });
});

//* Day-night mode script
document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.querySelector(".toggle-checkbox");

  // Check the localStorage for the current theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleCheckbox.checked = true;
  }

  toggleCheckbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
