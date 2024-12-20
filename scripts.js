const productos = [
    { name: 'Tetraedro de Cuarzo', price: 4500, image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/gettyimages-1489355351.jpg?w=1600&h=900', description: 'Cristal terapéutico utilizado para la meditación y equilibrio energético.' },
    { name: 'Amuleto de Reiki', price: 7500, image: 'https://http2.mlstatic.com/D_874344-MLA73174766612_122023-O.jpg', description: 'Amuleto de protección energética y equilibrio de chakras.' },
    { name: 'Aceites esenciales', price: 4500, image: 'https://http2.mlstatic.com/D_NQ_NP_824052-MLA47891841373_102021-O.webp', description: 'Aceite esencial de aromaterapia.' },
    { name: 'Geoda de Amatista', price: 5500, image: 'https://i.etsystatic.com/25144186/r/il/53c535/2996830835/il_570xN.2996830835_pqn0.jpg', description: 'Un excelente cristal para la meditación y para abrir los chakras.' },
    { name: 'Varita de Selenita', price: 3800, image: 'https://i.etsystatic.com/8732121/r/il/3ec35c/3171741509/il_794xN.3171741509_aig0.jpg', description: 'La selenita es utilizada para limpiar el aura y restaurar la energía.' },
    { name: 'Cristal de Cuarzo Rosa', price: 5000, image: 'https://i0.wp.com/geologyscience.com/wp-content/uploads/2023/08/Rose-Quartz-4-jpeg.webp?fit=1600&h=900', description: 'El cuarzo rosa es un cristal de amor y armonía.' }
];
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex === -1) {
        cart.push(product);
    } else {
        cart[existingProductIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showPurchaseAlert(product);
}

function showPurchaseAlert(product) {
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alerta-compra');
    alertContainer.innerHTML = `
        <img src="${product.image}" class="alerta-img" alt="${product.name}">
        <p><strong>${product.name}</strong> ha sido añadido al carrito</p>
        <div class="alerta-opciones">
            <button class="seguir-comprando" onclick="closeAlert()">Seguir Comprando</button>
            <button class="ir-carrito" onclick="goToCart()">Ir al Carrito</button>
        </div>
    `;
    document.body.appendChild(alertContainer);
    
    
    setTimeout(() => {
        closeAlert();
    }, 2000);
}

function closeAlert() {
    const alert = document.querySelector('.alerta-compra');
    if (alert) {
        alert.remove();
    }
}

function goToCart() {
    window.location.href = 'carrito.html';
}

// Función para añadir productos al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex === -1) {
        cart.push(product);
    } else {
        cart[existingProductIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showPurchaseAlert(product);
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('productos-carrito');
    const totalPriceElement = document.getElementById('total-precio');
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío</p>';
        totalPriceElement.textContent = '$0';
        return;
    }
    let totalPrice = 0;
    cartContainer.innerHTML = '';
    cart.forEach(product => {
        totalPrice += product.price * product.quantity;
        const productElement = document.createElement('div');
        productElement.classList.add('producto-carrito');
        productElement.innerHTML = `
            <img src="${product.image}" class="carrito-img" alt="${product.name}">
            <div class="carrito-info">
                <h4>${product.name}</h4>
                <p>Precio: $${product.price}</p>
                <p>Cantidad: ${product.quantity}</p>
            </div>
            <button class="eliminar-btn" onclick="removeFromCart('${product.name}')">Eliminar</button>
        `;
        cartContainer.appendChild(productElement);
    });
    totalPriceElement.textContent = `$${totalPrice}`;
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

function finalizePurchase() {
    localStorage.removeItem('cart');
    alert('Compra realizada con éxito. ¡Gracias por tu compra!');
    window.location.href = 'index.html';
}

if (document.getElementById('carrito-container')) {
    loadCart();
    document.getElementById('finalizar-compra').addEventListener('click', finalizePurchase);
    document.getElementById('limpiar-carrito').addEventListener('click', clearCart);
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex === -1) {
        cart.push(product);
    } else {
        cart[existingProductIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showPurchaseAlert(product);
}

function showPurchaseAlert(product) {
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alerta-compra');
    alertContainer.innerHTML = `
        <img src="${product.image}" class="alerta-img" alt="${product.name}">
        <p><strong>${product.name}</strong> ha sido añadido al carrito</p>
        <div class="alerta-opciones">
            <button class="seguir-comprando" onclick="closeAlert()">Seguir Comprando</button>
            <button class="ir-carrito" onclick="goToCart()">Ir al Carrito</button>
        </div>
    `;
    document.body.appendChild(alertContainer);
    setTimeout(() => { closeAlert(); }, 2000);
}

function closeAlert() {
    const alert = document.querySelector('.alerta-compra');
    if (alert) alert.remove();
}

function goToCart() {
    window.location.href = 'carrito.html';
}

function createProductCards(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('producto-card', 'card', 'm-3', 'p-3');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="producto-img card-img-top">
            <div class="card-body">
                <h4 class="card-title">${product.name}</h4>
                <p class="card-text">${product.description}</p>
                <p class="precio">Precio: <strong>$${product.price}</strong></p>
                <button class="btn btn-primary comprar-btn" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Comprar</button>
            </div>
        `;
        container.appendChild(productCard);
    });
    document.querySelectorAll('.comprar-btn').forEach(button => {
        button.replaceWith(button.cloneNode(true));
    });
    document.querySelectorAll('.comprar-btn').forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.getAttribute('data-name'),
                price: parseFloat(button.getAttribute('data-price')),
                image: button.getAttribute('data-image'),
                quantity: 1
            };
            addToCart(product);
        });
    });
}

createProductCards(productos.slice(0, 2), 'productos-destacados');
createProductCards(productos.slice(2), 'otros-productos');

document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    if (email && message) {
        console.log('Formulario completo. Enviando...');
        this.submit();
    } else {
        console.log('Por favor, complete todos los campos.');
    }
});

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('productos-carrito');
    const totalPriceElement = document.getElementById('total-precio');
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío</p>';
        totalPriceElement.textContent = '$0';
        return;
    }
    let totalPrice = 0;
    cartContainer.innerHTML = '';
    cart.forEach(product => {
        totalPrice += product.price * product.quantity;
        const productElement = document.createElement('div');
        productElement.classList.add('producto-carrito-item', 'd-flex', 'align-items-center', 'mb-3');
        productElement.innerHTML = `
            <img src="${product.image}" class="producto-img me-3" alt="${product.name}">
            <div class="producto-info flex-grow-1">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p class="precio">Precio: <strong>$${product.price}</strong></p>
                <p>Cantidad: 
                    <button onclick="decreaseQuantity('${product.name}')">-</button> 
                    ${product.quantity} 
                    <button onclick="increaseQuantity('${product.name}')">+</button>
                </p>
            </div>
            <button class="btn btn-danger eliminar-btn" onclick="removeFromCart('${product.name}')">Eliminar</button>
        `;
        cartContainer.appendChild(productElement);
    });
    totalPriceElement.textContent = `$${totalPrice}`;
}

function increaseQuantity(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

function decreaseQuantity(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        } else {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

function finalizePurchase() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('El carrito está vacío. ¡Añade algunos productos antes de finalizar la compra!');
    } else {
        localStorage.removeItem('cart');
        alert('Compra realizada con éxito. ¡Gracias por tu compra!');
        window.location.href = 'index.html';
    }
}

if (document.getElementById('carrito-container')) {
    loadCart();
    document.getElementById('finalizar-compra').addEventListener('click', finalizePurchase);
    document.getElementById('limpiar-carrito').addEventListener('click', clearCart);
}
