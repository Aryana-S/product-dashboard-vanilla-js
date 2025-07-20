// Coding Project 2: Product Dashboard Setup

//Use fetch() and .then() to retrieve data from JS store
function fetchProductsThen() {
    fetch ('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(products => {
            products.forEach (product => {
                console.log(product.fields.name);   //Log product name
            });
        })
        .catch(error => {
            console.log('Fetch error (then):', error.message);   //Log fetch errors
        });
}

// Use async/await to retrieve data from JS store
async function fetchProductsAsync() {
    try {
        const response = await fetch ('https://www.course-api.com/javascript-store-products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
} 

// Display first 5 products with name, price, and image
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear previous content

    products.slice(0, 5).forEach(product => {
        const { name, price, image } = product.fields;
        // Create product card
        const card = document.createElement('div');  
        card.className = 'product-card';

        // Create product image
        const img = document.createElement('img');
        img.src = image[0].url;
        img.alt = name;

        //Create product title
        const title = document.createElement('h2');
        title.textContent = name;

        // Create product price
        const priceTag = document.createElement('div');
        priceTag.className = 'price';
        priceTag.textContent = `$${(price/100).toFixed(2)}`; // Format price to 2 decimal places

        // Append elements to card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(priceTag);
        // Append card to container
        container.appendChild(card);
    });
}

// Handle errors in async function
function handleError(error) {
    console.log('An error occured:', error.message);
}

// Call both fetches
fetchProductsThen();
fetchProductsAsync();
