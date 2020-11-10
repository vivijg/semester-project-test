import { baseUrl } from "./settings/api.js";


const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<div class="product" href="detail.html?id=${product.id}">
                                        
                                        <img class="product-img"src="http://localhost:1337${product.image.url}" />
                                        <h4>${product.title}</h4>
                                        <p class="price-p">Price: ${product.price}</p>
                                    </div>`;
        });
    } catch (error) {
        console.log(error);
       
    }
})();