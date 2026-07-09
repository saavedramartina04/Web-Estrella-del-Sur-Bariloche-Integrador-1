let productos = []

function representarCardsProductos() {
    const contenedor = document.querySelector('.section-cards-body')

    if (!contenedor) return

    let cards = ''

    for (let producto of productos) {
        cards += `
            <section class="card">
                <div class="info-visible">
                    <img src="${producto.foto}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio}</p>
                    <p>Stock: ${producto.stock}</p>
                    <a href="#" class="btn-carrito">Agregar al carrito</a>
                </div>

                <div class="info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcionCorta}</p>
                    <p>${producto.descripcionLarga}</p>
                    <p>Marca: ${producto.marca}</p>
                    <p>Categoría: ${producto.categoria}</p>
                    <p>Edad: ${producto.edadDesde} a ${producto.edadHasta} años</p>
                    <p>Envío: ${producto.envio ? 'Sí' : 'No'}</p>
                </div>
            </section>
        `
    }

    contenedor.innerHTML = cards
}