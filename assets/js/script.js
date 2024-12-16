async function fetchProducts() {
    const response = await fetch('http://localhost:3000/grocers');
    const data = await response.json();
    displayProducts(data);
}

function displayProducts(data) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    data.forEach(grocer => {
        grocer.products.forEach(product => {
            productsDiv.innerHTML += 
                <div class="card mt-2">
                    <div class="card-body">
                        <h5>${product.name}</h5>
                        <p>Origin: ${product.origin}</p>
                        <p>Quality: ${product.quality}</p>
                        <p>Quantity: ${product.quantity}</p>
                        <p>Price: $${product.price}</p>
                        <button onclick="placeOrder(${product.id})" class="btn btn-info">Order</button>
                    </div>
                </div>;
        });
    });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic authentication check
    if ((username === "buyer1" && password === "pass1") || 
        (username === "grocer1" && password === "pass2")) {
        alert('Login successful!');
        document.getElementById('authArea').style.display = 'none';
        document.getElementById('productArea').style.display = 'block';
        document.getElementById('feedbackArea').style.display = 'block';
        fetchProducts();
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function placeOrder(productId) {
    alert(`Order placed for product ID: ${productId}`);
}

function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    alert(`Feedback received: ${feedback}`);
}