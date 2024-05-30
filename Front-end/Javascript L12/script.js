const product_name_input = document.getElementById("product_name_input");
const product_price_input = document.getElementById("product_price_input");
const product_count_input = document.getElementById("product_count_input");

const productInfoContainer = document.getElementById("productInfoContainer");


document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addProduct();
});


function addProduct() {
    const product = {
        name: product_name_input.value,
        price: product_price_input.value,
        count: product_count_input.value,
    };


    const productDiv = document.createElement("div");
    productDiv.classList.add("product-info");


    productDiv.innerHTML = `
        <h3>Product Information:</h3>
        <p>Name: ${product.name}</p>
        <p>Price: ${product.price}</p>
        <p>Count: ${product.count}</p>
    `;


    productInfoContainer.appendChild(productDiv);



}

function deleteAllProducts() {

    productInfoContainer.innerHTML = "";
}

function clearInputFields() {

    product_name_input.value = "";
    product_price_input.value = "";
    product_count_input.value = "";
}