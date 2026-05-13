//--------------------------------------------------
//variables globales
//--------------------------------------------------


//--------------------------------------------------
//funciones globales
//--------------------------------------------------
function representarCardsProductos() {

    let cards = ""
    if (productos.length) {
        for (let i = 0; i < productos.length; i++) {

            cards += `
            <section class="card">
                <h3>${productos[i].nombre}</h3>
                <img src="${productos[i].foto}" alt="">
                <div class="info">
                    <p><b>Precio:</b> $${productos[i].precio}</p>
                    <p><b>Stock:</b> ${productos[i].stock}</p>
                    <p><b>Marca:</b> ${productos[i].marca}</p>
                    <p><b>Categoria:</b> ${productos[i].categoria}</p>
                    <p><b>Descripción corta:</b> ${productos[i].descripcionCorta}</p>
                    <p><b>Descripción larga:</b> ${productos[i].descripcionLarga}</p>
                    <p><b>Edad desde:</b> ${productos[i].edadDesde}</p>
                    <p><b>Edad hasta:</b> ${productos[i].edadHasta}</p>
                    <br>
                    <p style="color:gold">
                        <b>Envio bonificado:</b>
                        ${productos[i].envio ? 'Si' : 'No'}
                    </p>
                </div>
            </section>
           `
        }
    } else {
        cards += '<h2>No se encontraron productos para mostrar</h2>'
    }
    document.querySelector(".section-cards-body").innerHTML = cards
}



function start() {
  console.warn(document.querySelector("title").innerText)

  representarCardsProductos()
}

