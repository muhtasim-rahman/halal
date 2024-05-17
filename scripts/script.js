// Get all the buttons with the class "btn-primary"
const buttons = document.querySelectorAll('.btn-primary');

// Add a click event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the chevron icons within the button
        const chevronDown = button.querySelector('.fa-chevron-down');
        const chevronUp = button.querySelector('.fa-chevron-up');

        // Toggle the visibility of the chevron icons
        chevronDown.classList.toggle('d-none');
        chevronUp.classList.toggle('d-none');
    });
});