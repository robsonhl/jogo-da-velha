
const celulas = document.querySelectorAll('.celula');


let vezDoX = true;

document.getElementById("reiniciar").addEventListener('click', iniciarJogo);

function iniciarJogo(){
    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click', tratarClick, {once: true}); 
    }
    )
}


function tratarClick(evento){
    evento.target.textContent = vezDoX ? "X" : "O";
    vezDoX = !vezDoX;
}


iniciarJogo();