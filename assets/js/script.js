// CÓDIGO ORIGINAL
// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }

// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

const   ele = document.getElementById("ele1");
ele.style.backgroundColor = 'green';

ele.addEventListener("click", () => {
        pintar(ele, 'yellow')
})

function pintar(ele, color = 'green'){
        ele.style.backgroundColor = color
}