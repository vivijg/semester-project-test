

import { baseUrl } from "./settings/api.js";



const productsUrl = baseUrl + "home";

(async function () {
    const container = document.querySelector(".hero-banner");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.forEach(function (home) {
            container.innerHTML += `<div class="banner" href="detail.html?id=${home.id}">                
            <img class="hero-banner"src="http://localhost:1337${home.image.url}" />
        </div>`;
        });
    } catch (error) {
        console.log(error);
       
    }
})();