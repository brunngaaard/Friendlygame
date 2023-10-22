
// Get references to the button and the popup form
const showFormButton = document.getElementById("showFormButton");
const popupForm = document.getElementById("popupForm");
const submit = document.getElementById("submit-button")

// Add a click event listener to the button
showFormButton.addEventListener("click", function () {
  // Toggle the "hidden" class to show/hide the form
  if (popupForm.classList.contains("hidden")) {
    popupForm.classList.remove("hidden");
  } else {
    popupForm.classList.add("hidden");
  } 

});


// Function to close the form
function closeForm() {
  popupForm.classList.add("hidden");
}

// Add a click event listener to the document
document.addEventListener("click", function (event) {
    // Check if the clicked element is not inside the form or the submit button
    if (!popupForm.contains(event.target) && event.target.tagName !== "BUTTON") {
      closeForm(); // Close the form
    }
  });

 submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Process the form data here if needed

    // Close the form
    popupForm.classList.add("hidden");
  });

   // Get a reference to the button element
   var button = document.getElementById("myButton");

   // Add a click event listener to the button
   button.addEventListener("click", function() {
       // Redirect to the new HTML page
       window.location.href = "teams.html";
   });


   // Get a reference to the search input element
const searchInput = document.getElementById("searchInput");

// Get a collection of all divs with the class "info-div"
const infoDivs = document.querySelectorAll(".info-div");

// Add an event listener to the search input
searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    // Loop through each info-div and hide or show them based on the search text
    infoDivs.forEach(div => {
        const divText = div.textContent.toLowerCase();
        if (divText.includes(searchText)) {
            div.style.display = "block"; // Show the div
        } else {
            div.style.display = "none"; // Hide the div
        }
    });
});


  