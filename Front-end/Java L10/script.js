const main_container = document.querySelector(".main-container");

let countries = [];

const countries_request = new XMLHttpRequest();
countries_request.open("GET", "https://gist.githubusercontent.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02/raw/be1391e25487ded4179b5f1c8eedb81b01226216/country-flag.json");
countries_request.onload = () => {
    countries = JSON.parse(countries_request.responseText);

    for (let i = 0; i < countries.length; i++) {



        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = countries[i].flag;
        const h2 = document.createElement("h2");
        h2.innerText = countries[i].country;
        div.appendChild(img);
        div.appendChild(h2);
        main_container.appendChild(div)
    }
}
countries_request.send();