const products = [
    {
        title: "Camisa Casual",
        price: "R$ 79,90",
        image: "products/1.jpg",
        featured: true
    },
    {
        title: "Calça Jeans",
        price: "R$ 99,90",
        image: "products/2.jpg",
        featured: false
    },
    {
        title: "Vestido Estampado",
        price: "R$ 129,90",
        image: "products/3.jpg",
        featured: true
    },
    {
        title: "Jaqueta de Couro",
        price: "R$ 199,90",
        image: "products/4.jpg",
        featured: false
    },
    {
        title: "Camisa de Manga Longa",
        price: "R$ 89,90",
        image: "products/belt.jpg",
        featured: true
    }
];

let cart = [];

// Função para renderizar produtos
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Limpa produtos existentes
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart" data-title="${product.title}">Adicionar ao Carrinho</button>
        `;

        productGrid.appendChild(card);
    });

    // Adiciona evento de click nos botões de "Adicionar ao Carrinho"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const title = event.target.dataset.title;
            addToCart(title);
        });
    });
}

// Função para adicionar produtos ao carrinho
function addToCart(title) {
    const product = products.find(p => p.title === title);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${title} foi adicionado ao carrinho!`);
    }
}

// Atualiza a contagem de itens no carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Função de pesquisa de produtos
function searchProducts() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Limpa produtos existentes

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart" data-title="${product.title}">Adicionar ao Carrinho</button>
        `;

        productGrid.appendChild(card);
    });
}

// Função para visualizar o carrinho
function viewCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpa itens do carrinho
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.title} - ${item.price}</p>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Eventos
document.getElementById('search-button').addEventListener('click', searchProducts);
document.getElementById('view-cart-button').addEventListener('click', viewCart);

// Inicializa a página
renderProducts();
