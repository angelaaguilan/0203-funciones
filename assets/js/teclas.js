var colores = 'white'

// función para coonfigurar las caja del KEY y del Container
confCard = (idcaja) => {
    console.log('Configura caja desde: ' + idcaja)
    const caja = document.getElementById(idcaja)
    caja.style.width = '200px'
    caja.style.height = '200px'
    caja.style.border = "2px solid black"
}

// función para aplicar color a ambas cajas
colorCard = (idcaja, color) => {
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
            confCard('key')
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
        colorCard('key', colores)
    }
})

// Letras Q, W o E
document.addEventListener('keypress', (event) => {
    const container = document.getElementById('container')
    if (event.key.toUpperCase() === 'Q' || event.key.toUpperCase() === 'W' || event.key.toUpperCase() === 'E' ) {
        const elementos = container.querySelectorAll('div')
        console.log(elementos)
        console.log('cantidad DIV (1): ' + elementos.length)
        if (elementos.length < 1){
            // Crea caja CONTAINER cuando no existe
            let nuevoElemento = document.createElement ('div')
            container.appendChild(nuevoElemento)
            console.log(container.firstElementChild)
            container.firstElementChild.id = 'child'
            confCard('child')
        }
        // Aplica colores a la caja hija del Container
        if (event.key.toUpperCase() === 'Q') {
             colores = 'purple'
         } else if (event.key.toUpperCase() === 'W') {
             colores =  'grey'
         } else if (event.key.toUpperCase() === 'E') {
             colores = 'brown'
         }
        console.log('Envía a aplicar color a Container-Child: ' + colores)
        colorCard('child', colores)
    }
})