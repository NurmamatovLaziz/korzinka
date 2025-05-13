function filterProducts() {
  let search = document.getElementById("searchInput").value.toLowerCase();
  let priceFilter = document.getElementById("priceFilter").value;
  let categoryFilter = document.getElementById("categoryFilter").value;
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let name = product.getAttribute("data-name").toLowerCase();
    let price = parseInt(product.getAttribute("data-price"));
    let category = product.getAttribute("data-category");

    let matchSearch = name.includes(search);
    let matchPrice =
      priceFilter === "all" ||
      (priceFilter === "below50" && price < 50000) ||
      (priceFilter === "above50" && price >= 50000);
    let matchCategory =
      categoryFilter === "all" || category === categoryFilter;

    product.style.display = (matchSearch && matchPrice && matchCategory) ? "flex" : "none";
  });
}
