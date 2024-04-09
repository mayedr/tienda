const products = [
    {
        id: 1,
        name: 'Zapatos Deportivos',
        price: 59.99,
        image: 'images/zapatos_deportivos.jpg'
    },
    {
        id: 2,
        name: 'Zapatos Casuales',
        price: 39.99,
        image: 'images/zapatos_casuales.jpg'
    },
    {
        id: 3,
        name: 'Botas de Cuero',
        price: 79.99,
        image: 'images/botas_cuero.jpg'
    }
];

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiamos el contenido antes de volver a renderizar

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
        alert(`Agregaste "${selectedProduct.name}" al carrito. Precio: $${selectedProduct.price}`);
    } else {
        alert('Producto no encontrado');
    }
}

// Llamamos a la función para renderizar los productos al cargar la página
window.onload = renderProducts;