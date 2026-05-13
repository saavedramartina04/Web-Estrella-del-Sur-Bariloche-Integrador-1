//--------------------------------------------------
//variables globales
//--------------------------------------------------
function agregar(e){
  e.preventDefault()

  console.log('agregar()')

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

  const nombre = refNombre.value
  const precio = refPrecio.value
  const stock = refStock.value
  const marca = refMarca.value
  const categoria = refCategoria.value
  const descCorta = refDesCort.value
  const desLar = refDescLar.value
  const edadDesde = refEdadDesde.value
  const edadHasta = refEdadHasta.value
  const foto = refFoto.value
  const envio = refEnvio.checked

  const producto = {
    nombre: nombre,
    precio: +precio,
    stock: parseInt(stock),
    marca: marca,
    categoria: categoria,
    descripcionCorta: descCorta,
    descripcionLarga: parseInt(desLar),
    edadDesde: parseInt(edadDesde),
    edadHasta: edadHasta,
    foto: foto,
    envio: envio,
  }
  console.log(producto)
  productos.push(producto)
  representarTablasProductos()

  refNombre.value = ''
  refPrecio.value = ''
  refStock.value = ''
  refMarca.value = ''
  refCategoria.value = ''
  refDesCort.value = ''
  refDescLar.value = ''
  refEdadDesde.value = ''
  refEdadHasta.value = ''
  refFoto.value = ''
  refEnvio.checked = ''
}

function representarTablasProductos(){
  let filasTabla = ''
  if(productos.length){
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
                </thead>`


      filasTabla += '<tbody>'

      for(let producto of productos){
        filasTabla +=`
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
                    <td><img width=75px src="${producto.foto}" alt="${producto.nombre}"</td>
                    <td class="centrar">${producto.envio? 'si': 'no'}</td>
                </tr>
        `
      }

      filasTabla += '</tbody>'
    }
    else filasTabla += '<h2>No se encontrarton productos para mostrar</h2>'
    
    document.querySelector('table').innerHTML = filasTabla
}
//--------------------------------------------------
//funciones globales
//--------------------------------------------------
function start() {
  console.warn(document.querySelector("title").innerText)

  document.querySelector('button').onclick = agregar

  representarTablasProductos()
  
}



