import { renderProducts } from "./renderProducts.js";
import { displayMessage } from "./displayMessage.js";

export function filterProducts(products) {
  const searchInput = document.querySelector(".search");

  
  searchInput.onkeyup = function(event) {
    
    const searchValue = event.target.value.trim();

    const filteredPrices = products.filter(function(product) {
    
      if (parseFloat(product.price) <= searchValue || searchValue === "") {
        return true;
      }
    });

   
    if (filteredPrices.length > 0) {
      renderProducts(filteredPrices);
    } else {
      displayMessage("error", "No results..", ".results");
    }
  };
}
