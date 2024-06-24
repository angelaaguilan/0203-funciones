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
    console.log(caja)
    console.log(idcaja)
    caja.style.backgroundColor = color
    console.log('Color a caja desde: ' + idcaja + ', con color: ' + color)
}

// Letras A, S o D
document.addEventListener('keydown', function (event) {
    if (event.key.toUpperCase() === 'A' || event.key.toUpperCase() === 'S' || event.key.toUpperCase() === 'D' ) {
        const caja = document.getElementById('key')
        if (caja.style.height != '200px'){
            // Aplicar características a caja con ID = KEY
            confCard('key')
        }
        // Asignar color a la caja con ID = KEY
        if (event.key.toUpperCase() === 'A') {
            colores = 'pink'
        } else if (event.key.toUpperCase() === 'S') {
            colores = 'orange'
        } else if (event.key.toUpperCase() === 'D') {
            colores = 'lightblue'
        }
        // Aplicar color a la caja con ID KEY
        colorCard('key', colores)
    }
})

// Letras Q, W o E
document.addEventListener('keypress', (event) => {
    const container = document.getElementById('container')
    if (event.key.toUpperCase() === 'Q' || event.key.toUpperCase() === 'W' || event.key.toUpperCase() === 'E' ) {
        // Crea nueva caja
        let nuevoElemento = document.createElement ('div')
        container.appendChild(nuevoElemento)
        elementos = container.querySelectorAll('div')
        // Asignar ID a la nueva caja
        nuevoElemento.id = 'div' + (elementos.length-1) 
        let idcaja = nuevoElemento.id

        // Asignar color a la caja hija del Container
        if (event.key.toUpperCase() === 'Q') {
             colores = 'purple'
         } else if (event.key.toUpperCase() === 'W') {
             colores =  'grey'
         } else if (event.key.toUpperCase() === 'E') {
             colores = 'brown'
         }

        // Aplicar configuración a la nueva caja
        confCard(idcaja)
        // Aplicar color a la nueva caja
        colorCard(idcaja, colores)
    }
})