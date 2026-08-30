function toggleSubcategories(element) {
    const subcategories = element.nextElementSibling;
    const arrow = element.querySelector(".toggle-icon");

    subcategories.classList.toggle("hidden");
    arrow.classList.toggle("rotate");
}

function SearchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");
    const noItemContainer = document.querySelector(".noitem-container");

    let foundProducts = false;

    productCards.forEach(card => {
        const productName = card.querySelector("#product-name").textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            card.style.display = "block";
            foundProducts = true;
        } else {
            card.style.display = "none";
        }
    });

    if (!foundProducts) {
        noItemContainer.style.display = "block";
    } else {
        noItemContainer.style.display = "none";
    }
}

const form = document.getElementById("Searchbar");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page on submit
    SearchProducts();
});
