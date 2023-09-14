// Make button link to new html page
const button = document.getElementById("btn");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Redirect to a new HTML page
    window.location.href = "teams.html";
});

// Make button link to new html page end

// Get references to the button and the pop-up form
const showFormButton = document.getElementById("showFormButton");
const popupForm = document.getElementById("popupForm");
const closeFormButton = document.getElementById("closeFormButton");

// Function to show the pop-up form
function showForm() {
    popupForm.style.display = "block";
}

// Function to hide the pop-up form
function hideForm() {
    popupForm.style.display = "none";
}

// Event listener to show the form when the button is clicked
showFormButton.addEventListener("click", showForm);

// Event listener to hide the form when the close button is clicked
closeFormButton.addEventListener("click", hideForm);

// Event listener to hide the form when clicking outside of it
window.addEventListener("click", function (event) {
    if (event.target === popupForm) {
        hideForm();
    }
});