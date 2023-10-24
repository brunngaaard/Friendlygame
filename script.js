// Get a reference to the button element
  const button = document.getElementById("myButton");

   // Add a click event listener to the button
   button.addEventListener("click", function() {
       // Redirect to the new HTML page
       window.location.href = "teams.html";
   });

   document.addEventListener("DOMContentLoaded", () => {
    const openPopupButton = document.getElementById("openPopup");
    const closePopupButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    openPopupButton.addEventListener("click", () => {
        popup.style.display = "block";
    });

    closePopupButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside the form
    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Prevent the form from closing when clicking inside the popup content
    popup.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});