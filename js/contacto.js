//--------------------------------------------------
//variables globales
//--------------------------------------------------

const formulario = document.querySelector('form')

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e){

    e.preventDefault()

    const refNombre = document.querySelector('#nombre')
    const refEmail = document.querySelector('#email')
    const refComentarios = document.querySelector('#comentarios')

    const nombre = refNombre.value
    const email = refEmail.value
    const comentarios = refComentarios.value


    if(nombre == ''){
        alert('Debe ingresar un nombre')
        return
    }

    if(email == ''){
        alert('Debe ingresar un email')
        return
    }

    if(comentarios == ''){
        alert('Debe escribir un comentario')
        return
    }

    if(!email.includes('@')){
        alert('Email inválido')
        return
    }


    alert('Formulario enviado correctamente')

    refNombre.value = ''
    refEmail.value = ''
    refComentarios.value = ''
}
//--------------------------------------------------
//funciones globales
//--------------------------------------------------
function start() {
  console.warn(document.querySelector("title").innerText)

  
}