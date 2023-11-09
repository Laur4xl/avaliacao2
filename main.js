function tocasom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador<listaDeTeclas.lenght){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "ssom_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocasom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
    
}