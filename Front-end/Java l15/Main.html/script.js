const main_container = document.querySelector(".main-container");
const computers_nav_btn = document.getElementById("computers_nav_btn");
const phones_nav_btn = document.getElementById("phones_nav_btn");

let computers = [{
        model: "Dell XPS 13",
        ram: "16GB",
        price: 1200
    },
    {
        model: "HP Spectre x360",
        ram: "8GB",
        price: 1000
    },
    {
        model: "MacBook Air",
        ram: "8GB",
        price: 1100
    },

];

let phones = [{
        model: "iPhone 13",
        ram: "6GB",
        price: 1000
    },
    {
        model: "Samsung Galaxy S21",
        ram: "8GB",
        price: 900
    },
    {
        model: "Google Pixel 6",
        ram: "6GB",
        price: 800
    },

];

computers_nav_btn.onclick = () => {
    main_container.innerHTML = "";
    for (let i = 0; i < computers.length; i++) {
        const div = createProductDiv(computers[i], "computers", i);
        main_container.appendChild(div);
    }
};

phones_nav_btn.onclick = () => {
    main_container.innerHTML = "";
    for (let i = 0; i < phones.length; i++) {
        const div = createProductDiv(phones[i], "phones", i);
        main_container.appendChild(div);
    }
};

function createProductDiv(product, type, id) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = product.model;
    const p1 = document.createElement("p");
    p1.innerText = "RAM: " + product.ram;
    const p2 = document.createElement("p");
    p2.innerText = "Price: " + product.price + "$";
    const button = document.createElement("button");
    button.className = "btn btn-dark";
    button.innerText = "VIEW DETAILS";
    button.onclick = () => {
        localStorage.setItem("productType", type);
        localStorage.setItem("productId", id);
        document.location = "Details.html";
    };

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);

    return div;
}