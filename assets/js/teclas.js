
var colores = 'white'

// función para crear caja del KEY y del Container
creaCaja = (idcaja) => {
    console.log('Crea caja desde: ' + idcaja)
    const caja = document.getElementById(idcaja)
    caja.style.width = '200px'
    caja.style.height = '200px'
    caja.style.border = "2px solid black"
}

// función para aplicar color a ambas cajas
colorCaja = (idcaja, color) => {
    const caja = document.getElementById(idcaja);
    caja.style.backgroundColor = color
    console.log('Color a caja desde: ' + idcaja + ', con color: ' + color)
}

// Letras A, S o D
document.addEventListener('keydown', function (event) {
    if (event.key.toUpperCase() === 'A' || event.key.toUpperCase() === 'S' || event.key.toUpperCase() === 'D' ) {
        const caja = document.getElementById('key')
        if (caja.style.height != '200px'){
            // Crea caja KEY cuando no existe
            creaCaja('key')
        }
        // Aplica color a la caja KEY
        if (event.key.toUpperCase() === 'A') {
            colores = 'pink'
        } else if (event.key.toUpperCase() === 'S') {
            colores = 'orange'
        } else if (event.key.toUpperCase() === 'D') {
            colores = 'lightblue'
        }
        console.log('Envía a aplicar color a Key: ' + colores)
        colorCaja('key', colores)
    }
})

// Letras Q, W o E
document.addEventListener('keypress', (event) => {
    if (event.key.toUpperCase() === 'Q' || event.key.toUpperCase() === 'W' || event.key.toUpperCase() === 'E' ) {
        const caja = document.getElementById('container')
        if (caja.style.height != '200px'){
            // Crea caja CONTAINER cuando no existe
            creaCaja('container')
        }
        // Aplica colores a la caja Container 
        if (event.key.toUpperCase() === 'Q') {
            colores = 'purple'
        } else if (event.key.toUpperCase() === 'W') {
            colores =  'grey'
        } else if (event.key.toUpperCase() === 'E') {
            colores = 'brown'
        }
        console.log('Envía a aplicar color a Container: ' + colores)
        colorCaja('container', colores)
    }
} )