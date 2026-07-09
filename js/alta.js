//--------------------------------------------------
//variables globales
//--------------------------------------------------
async function agregar(e) {
  e.preventDefault()

  const refNombre = document.querySelector('#nombre')
  const refPrecio = document.querySelector('#precio')
  const refStock = document.querySelector('#stock')
  const refMarca = document.querySelector('#marca')
  const refCategoria = document.querySelector('#categoria')
  const refDesCort = document.querySelector('#descripcion-corta')
  const refDescLar = document.querySelector('#descripcion-larga')
  const refEdadDesde = document.querySelector('#edad-desde')
  const refEdadHasta = document.querySelector('#edad-hasta')
  const refFoto = document.querySelector('#foto')
  const refEnvio = document.querySelector('#envio')

  const producto = {
    nombre: refNombre.value,
    precio: parseInt(refPrecio.value),
    stock: parseInt(refStock.value),
    marca: refMarca.value,
    categoria: refCategoria.value,
    descripcionCorta: refDesCort.value,
    descripcionLarga: refDescLar.value,
    edadDesde: parseInt(refEdadDesde.value),
    edadHasta: parseInt(refEdadHasta.value),
    foto: refFoto.value,
    envio: refEnvio.checked,
  }

  await agregarProducto(producto)

  productos = await obtenerProductos()
  representarTablasProductos()

  document.querySelector('form').reset()
}

function representarTablasProductos() {
  let filasTabla = ''

  if (productos.length) {
    filasTabla += `
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Marca</th>  
          <th>Categoría</th>
          <th>Descripción Corta</th>
          <th>Descripción Larga</th>
          <th>Edad desde</th>
          <th>Edad hasta</th>
          <th>Foto</th>
          <th>Envío bonificado</th>
        </tr>
      </thead>
    `

    filasTabla += '<tbody>'

    for (let producto of productos) {
      filasTabla += `
        <tr>
          <td>${producto.nombre}</td>
          <td class="centrar">${producto.precio}</td>
          <td class="centrar">${producto.stock}</td>
          <td>${producto.marca}</td>
          <td>${producto.categoria}</td>
          <td>${producto.descripcionCorta}</td>
          <td>${producto.descripcionLarga}</td>
          <td>${producto.edadDesde}</td>
          <td>${producto.edadHasta}</td>
          <td><img width="75px" src="${producto.foto}" alt="${producto.nombre}"></td>
          <td class="centrar">${producto.envio ? 'si' : 'no'}</td>
        </tr>
      `
    }

    filasTabla += '</tbody>'
  } else {
    filasTabla += '<h2>No se encontraron productos para mostrar</h2>'
  }

  document.querySelector('table').innerHTML = filasTabla
}

async function startAlta() {
  productos = await obtenerProductos()

  document.querySelector("form").addEventListener("submit", agregar)

  representarTablasProductos()
}