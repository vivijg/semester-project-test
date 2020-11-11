import { baseUrl } from "./settings/api.js";

import { renderProducts } from "./renderProducts.js";
import { filterProducts } from "./filterProducts.js";

const productsUrl = baseUrl + "products";

(async function getInfo() {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const results = json.data;

        container.innerHTML = "http://localhost:1337/";

        json.forEach(function (product) {
            container.innerHTML += `<div class="product" href="detail.html?id=${product.id}">
                                        <div class="products">
                                        <img class="product-img"src="http://localhost:1337${product.image.url}" />
                                        </div>

                                        <div class="info">
                                        <h4>${product.title}</h4>
                                        <p></p>
                                         <h5 class="price-p">NOK ${product.price}</h5>
                                        <p>${product.description}</p>
                                       
                                        <input class="cart-btn" type="button" value="Add to Cart">
                                        </div>
                                    </div>`;
        });

         
    renderProducts(results);
    filterProducts(results);


    } catch (error) {
        console.log(error);
       
    }


})();

getInfo();