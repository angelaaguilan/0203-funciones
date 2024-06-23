medidaCajas = (idcaja, color) => {
    const caja = document.getElementById(idcaja);
    caja.style.width = '200px';
    caja.style.height = '200px';
    caja.style.backgroundColor = color;
}

medidaCajas('caja1', 'blue');
medidaCajas('caja2', 'red');
medidaCajas('caja3', 'green');
medidaCajas('caja4', 'yellow');

const   caja1 = document.getElementById('caja1')
caja1.addEventListener("click", () => {
    if (caja1.style.backgroundColor == 'blue') {
        pintar(caja1, 'black')
     } else
         pintar(caja1, 'blue')
})

const   caja2 = document.getElementById("caja2")
caja2.addEventListener("click", () => {
    if (caja2.style.backgroundColor == 'red') {
        pintar(caja2, 'black')
    } else
        pintar(caja2, 'red')
})

const   caja3 = document.getElementById("caja3")
caja3.addEventListener("click", () => {
    if (caja3.style.backgroundColor == 'green') {
        pintar(caja3, 'black')
    } else
        pintar(caja3, 'green')
})

const   caja4 = document.getElementById("caja4")
caja4.addEventListener("click", () => {
    if (caja4.style.backgroundColor == 'yellow') {        
        pintar(caja4, 'black')
    } else
        pintar(caja4, 'yellow')
})

function pintar(caja, color){
        caja.style.backgroundColor = color
}
