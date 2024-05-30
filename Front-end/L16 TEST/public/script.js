const main_container = document.querySelector(".main-container");

function getAllParfums() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/parfums/");
    request.onload = () => {
        const parfums = JSON.parse(request.responseText);
        main_container.innerHTML = "";

        for (let i = 0; i < parfums.length; i++) {
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = parfums[i].image_url;
            const h2 = document.createElement("h2");
            h2.innerText = parfums[i].model;
            const p1 = document.createElement("p");
            p1.innerText = "Price: " + parfums[i].price;
            const p2 = document.createElement("p");
            p2.innerText = "Volume: " + parfums[i].volume;
            const button = document.createElement("button");
            button.className = "btn btn-primary";
            button.innerText = "DELETE";
            button.onclick = () => {
                deleteParfum(parfums[i].id);
                console.log(parfums[i].id)
            };

            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(button);

            main_container.appendChild(div);
        }
    };
    request.send();
}

function deleteParfum(parfumId) {
    console.log(parfumId);
    const delete_request = new XMLHttpRequest();
    delete_request.open("DELETE", "http://localhost:3000/parfums/" + parfumId);
    delete_request.send();
    getAllParfums();
}

getAllParfums();