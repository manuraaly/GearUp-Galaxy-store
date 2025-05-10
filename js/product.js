// js/product.js (para product-detail.html)

document.addEventListener('DOMContentLoaded', () => {
  const productDetailContainer = document.getElementById('product-detail-container');

  if (productDetailContainer) { // Solo ejecutar si estamos en product-detail.html
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');

      if (!productId) { // Unhappy path: no ID in URL
          productDetailContainer.innerHTML = `
              <div class="alert alert-danger text-center" role="alert">
                  <h4>Producto no especificado</h4>
                  <p>No se ha proporcionado un ID de producto para mostrar.</p>
                  <a href="../index.html" class="btn btn-primary">Volver a la tienda</a>
              </div>`;
          return;
      }

      const product = getProductById(productId); // getProductById está en product_data.js

      if (!product) { // Unhappy path: product not found
          productDetailContainer.innerHTML = `
              <div class="alert alert-warning text-center" role="alert">
                  <h4>Producto no encontrado</h4>
                  <p>El producto que buscas no existe o no está disponible.</p>
                  <a href="../index.html" class="btn btn-primary">Volver a la tienda</a>
              </div>`;
          return;
      }

      // Happy Path: Mostrar detalles del producto
      productDetailContainer.innerHTML = `
          <div class="row">
              <div class="col-md-6 mb-3">
                  <img src="${product.image}" class="img-fluid rounded shadow-sm" alt="${product.name}">
              </div>
              <div class="col-md-6">
                  <h2>${product.name}</h2>
                  <p class="text-muted">Categoría: ${product.category}</p>
                  <p>${product.description}</p>
                  <h3 class="my-3">Precio: <span class="text-success fw-bold">S/.${product.price.toFixed(2)}</span></h3>
                  <p>Stock disponible: ${product.stock > 0 ? product.stock + ' unidades' : '<span class="text-danger">Agotado</span>'}</p>
                  <button class="btn btn-lg btn-primary add-to-cart-btn-detail mt-3" data-product-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                      <i class="fas fa-cart-plus me-2"></i>Añadir al Carrito
                  </button>
                   <a href="../index.html" class="btn btn-outline-secondary mt-3 ms-2">Seguir Comprando</a>
              </div>
          </div>
      `;

      const addToCartButtonDetail = document.querySelector('.add-to-cart-btn-detail');
      if (addToCartButtonDetail) {
          addToCartButtonDetail.addEventListener('click', (event) => {
              const prodId = event.target.dataset.productId;
              addToCart(parseInt(prodId)); // addToCart está en cart.js
          });
      }
  }
});