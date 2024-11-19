const precio = 400000
let preciofinal = 0
let cantidad = 0

// Referencia html
const precioSpan = document.querySelector(".precio-inicial");
const totalPagar = document.querySelector(".valor-total")
let cantidades = document.querySelector('.cantidades')
// Botones
const btnSumar = document.querySelector('.botonSumar')
const btnRestar = document.querySelector('.botonRestar')
precioSpan.innerHTML = precio


// Funcion Boton sumar 


btnSumar.addEventListener('click', () => {
    cantidad = cantidad + 1
    cantidades.innerHTML = cantidad
    preciofinal = precio * cantidad
    totalPagar.innerHTML = preciofinal
})

// Funcion Boton restar 

btnRestar.addEventListener('click', () => {
    cantidad = cantidad - 1
    cantidades.innerHTML = cantidad
    preciofinal = precio * cantidad
    totalPagar.innerHTML = preciofinal
})

