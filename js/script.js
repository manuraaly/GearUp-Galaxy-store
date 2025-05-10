// js/script.js (para index.html)

document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products-container');

  if (productsContainer) { // Solo ejecutar si estamos en index.html
      loadProducts();
  }

  // Esta función la llamaremos también después de añadir productos dinámicamente
  function addEventListenersToCartButtons() {
      const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
      addToCartButtons.forEach(button => {
          // Remover listener previo para evitar duplicados si se llama múltiples veces
          button.removeEventListener('click', handleAddToCartClick);
          button.addEventListener('click', handleAddToCartClick);
      });
  }

  function handleAddToCartClick(event) {
      const productId = event.target.dataset.productId;
      if (productId) {
          addToCart(parseInt(productId)); // addToCart está en cart.js
      } else {
          console.error("Error: Product ID no encontrado en el botón.");
          alert("Hubo un problema al añadir el producto."); // Unhappy Path
      }
  }

  function loadProducts() {
      const allProducts = getAllProducts(); // getAllProducts está en product_data.js

      if (!allProducts || allProducts.length === 0) { // Unhappy path
          productsContainer.innerHTML = '<p class="col-12 text-center">No hay productos disponibles en este momento.</p>';
          return;
      }

      // Happy Path: Mostrar productos
      productsContainer.innerHTML = allProducts.map(product => `
          <div class="col-md-6 col-lg-4 mb-4">
              <div class="card h-100 shadow-sm product-card">
                  <a href="pages/product-detail.html?id=${product.id}" class="text-decoration-none text-dark">
                      <img src="${product.image}" class="card-img-top" alt="${product.name}">
                      <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <p class="card-text text-muted small">${product.category}</p>
                          <p class="card-text product-description">${product.description.substring(0, 80)}...</p>
                          <h6 class="card-subtitle mb-2 fw-bold">S/.${product.price.toFixed(2)}</h6>
                      </div>
                  </a>
                  <div class="card-footer bg-transparent border-top-0 text-center">
                      <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                          <i class="fas fa-cart-plus me-2"></i>Añadir al Carrito
                      </button>
                  </div>
              </div>
          </div>
      `).join('');

      addEventListenersToCartButtons(); // Añadir listeners a los botones recién creados
  }
});
