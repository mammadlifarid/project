const name_input = document.getElementById("name_input");
const volume_input = document.getElementById("volume_input");
const price_input = document.getElementById("price_input");
const main_container = document.querySelector(".main-container");
const all_radio = document.getElementById("all_radio");
const green_radio = document.getElementById("green_radio");
const red_radio = document.getElementById("red_radio");
const orange_radio = document.getElementById("orange_radio");

let perfumes = [];

all_radio.onclick = () => {
    getAllItems();
};

green_radio.onclick = () => {
    main_container.innerHTML = "";
    const get_request = new XMLHttpRequest();
    get_request.open("GET", "http://localhost:3000/students");
    get_request.onload = () => {
        perfumes = JSON.parse(get_request.responseText);
        for (let i = 0; i < perfumes.length; i++) {
            if (perfumes[i].price > 80) {
                createPerfumeElement(perfumes[i], "green");
            }
        }
    };
    get_request.send();
};

red_radio.onclick = () => {
    main_container.innerHTML = "";
    const get_request = new XMLHttpRequest();
    get_request.open("GET", "http://localhost:3000/students");
    get_request.onload = () => {
        perfumes = JSON.parse(get_request.responseText);
        for (let i = 0; i < perfumes.length; i++) {
            if (perfumes[i].price <= 60) {
                createPerfumeElement(perfumes[i], "red");
            }
        }
    };
    get_request.send();
};

orange_radio.onclick = () => {
    main_container.innerHTML = "";
    const get_request = new XMLHttpRequest();
    get_request.open("GET", "http://localhost:3000/students");
    get_request.onload = () => {
        perfumes = JSON.parse(get_request.responseText);
        for (let i = 0; i < perfumes.length; i++) {
            if (perfumes[i].price > 60 && perfumes[i].price <= 80) {
                createPerfumeElement(perfumes[i], "orange");
            }
        }
    };
    get_request.send();
};

function createPerfumeElement(perfume, backgroundColor) {
    const div = document.createElement("div");
    div.style.backgroundColor = backgroundColor;
    const h2 = document.createElement("h2");
    h2.innerText = perfume.name;
    const p1 = document.createElement("p");
    p1.innerText = "Volume: " + perfume.volume + " ml";
    const p2 = document.createElement("p");
    p2.innerText = "Price: $" + perfume.price;
    const button = document.createElement("button");
    button.className = "btn btn-primary";
    button.innerText = "DELETE";
    button.onclick = () => {
        const delete_request = new XMLHttpRequest();
        delete_request.open("DELETE", "http://localhost:3000/students/" + perfume.id);
        delete_request.send();
        getAllItems();
        all_radio.checked = true;
    };

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);
    main_container.appendChild(div);
}

function getAllItems() {
    main_container.innerHTML = "";
    const get_request = new XMLHttpRequest();
    get_request.open("GET", "http://localhost:3000/students");
    get_request.onload = () => {
        perfumes = JSON.parse(get_request.responseText);
        for (let i = 0; i < perfumes.length; i++) {
            let backgroundColor = "";
            if (perfumes[i].price <= 60) {
                backgroundColor = "red";
            } else if (perfumes[i].price <= 80) {
                backgroundColor = "orange";
            } else {
                backgroundColor = "green";
            }

            createPerfumeElement(perfumes[i], backgroundColor);
        }
    };
    get_request.send();
}

function addPerfume() {
    event.preventDefault();

    let perfume = {
        name: name_input.value,
        volume: volume_input.value,
        price: price_input.value
    };

    const post_request = new XMLHttpRequest();
    post_request.open("POST", "http://localhost:3000/students");
    post_request.setRequestHeader("Content-Type", "application/json");
    post_request.send(JSON.stringify(perfume));

    getAllItems();
    all_radio.checked = true;
}


getAllItems();