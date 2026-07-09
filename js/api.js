const URL_PRODUCTOS = "https://6a4ed539e785c9ef536d2afc.mockapi.io/Productos"

async function obtenerProductos() {
    const respuesta = await fetch(URL_PRODUCTOS)

    if (!respuesta.ok) {
        console.error("Error al obtener productos")
        return []
    }

    return await respuesta.json()
}

async function agregarProducto(producto) {
    const respuesta = await fetch(URL_PRODUCTOS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    })

    return await respuesta.json()
}