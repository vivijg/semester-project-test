import { renderProducts } from "./renderProducts.js";
import { displayMessage } from "./displayMessage.js";

export function filterProducts(products) {
  const searchInput = document.querySelector(".search");

  // attach onkeyup listener to the searchInput.
  searchInput.onkeyup = function(event) {
    // save the user input value and trim off any whitespaces
    const searchValue = event.target.value.trim();

    const filteredPrices = products.filter(function(product) {
      // use parseFloat() method to convert the string/text to number, and keep decimals
      // we also check if searchValue is empty so that all products show if nothing is entered.
      if (parseFloat(product.price) <= searchValue || searchValue === "") {
        return true;
      }
    });

    // check length of filteredPrices array to determine if results or error should be shown.
    if (filteredPrices.length > 0) {
      renderProducts(filteredPrices);
    } else {
      displayMessage("error", "No results..", ".results");
    }
  };
}
