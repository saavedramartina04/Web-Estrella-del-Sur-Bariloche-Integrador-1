const app = document.querySelector("#app")

async function cargarVista(vista) {
    const respuesta = await fetch(`vistas/${vista}.html`);
    const html = await respuesta.text()

    app.innerHTML = html

    if (vista === "inicio") {
        start();
    }

    if (vista === "alta") {
        startAlta()
    }
}

document.querySelectorAll("[data-vista]").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault()

        const vista = this.dataset.vista
        cargarVista(vista)
    })
})

cargarVista("inicio")