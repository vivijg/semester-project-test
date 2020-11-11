export function renderProducts(products) {
    const resultsContainer = document.querySelector(".results");
  
    resultsContainer.innerHTML = "";
  
    for (let i = 0; i < products.length; i++) {
      resultsContainer.innerHTML += `
        <div class="card">
          <h4>${products[i].title}</h4>
          <h3">${products[i].price}</h3>
        </div>
      `;
    }
  }
  