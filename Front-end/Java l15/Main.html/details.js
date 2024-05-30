document.addEventListener("DOMContentLoaded", () => {
            const detailsContainer = document.getElementById("detailsContainer");

            const productType = localStorage.getItem("productType");
            const productId = localStorage.getItem("productId");

            if (productType && productId) {
                if (productType === "computers") {
                    displayComputerDetails(productId);
                } else if (productType === "phones") {
                    displayPhoneDetails(productId);
                }
            }

            function displayComputerDetails(id) {
                const computerDetails = computers[id];
                if (computerDetails) {
                    setDetails(computerDetails);
                } else {
                    console.error("Computer details not found.");
                }
            }

            function displayPhoneDetails(id) {
                const phoneDetails = phones[id];
                if (phoneDetails) {
                    setDetails(phoneDetails);
                } else {
                    console.error("Phone details not found.");
                }
            }

            function setDetails(details) {
                detailsContainer.innerHTML = `
            <h2>${details.model}</h2>
            <p>Description: ${getProductDescription(details)}</p>
            <p>Ram: ${details.ram}</p>
            <p>Price: $${details.price}</p>
            <p>Key Features: ${getProductKeyFeatures(details)}</p>
        `;
            }