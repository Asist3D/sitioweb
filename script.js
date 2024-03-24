document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-input");
    const products = document.querySelectorAll(".product");
    const btnVerCarrito = document.getElementById("ver-carrito"); // Seleccionamos el botón "Ver carrito"

    // Funcionalidad de búsqueda de productos
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        products.forEach(function(product) {
            const title = product.querySelector(".product-title").textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // Event listener para el botón "Ver carrito"
    btnVerCarrito.addEventListener("click", function() {
        // Aquí irá la lógica para mostrar el carrito
        alert("Se presionó el botón Ver carrito");
    });

    // Manejar el evento de clic en el botón "Agregar al carrito"
    const btnsAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");
    btnsAgregarCarrito.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Aquí puedes obtener los detalles del producto si es necesario
            // y luego redirigir a la página del carrito
            window.location.href = "carrito.html";
        });
    });
});
