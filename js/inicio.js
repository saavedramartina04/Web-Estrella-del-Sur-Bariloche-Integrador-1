//--------------------------------------------------
//variables globales
//--------------------------------------------------


//--------------------------------------------------
//funciones globales
//--------------------------------------------------

async function start() {
    productos = await obtenerProductos()
    representarCardsProductos()
}

