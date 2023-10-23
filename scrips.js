document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const teamBoxes = document.querySelectorAll(".team-box");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        teamBoxes.forEach(box => {
            const boxText = box.textContent.toLowerCase();
            if (boxText.includes(searchText)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    });
});