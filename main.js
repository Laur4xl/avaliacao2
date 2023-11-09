function tocasom(idElementoAudio){
document.querySelectorAll(idElementoAudio).play();
}
const listaDeTeclas = documen.querySelectorAll("tecla");

let contador = 0;
while(contador<listaDeTeclas.lenght){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "ssom_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocasom("#som_tecla_aplausos");
        tocasom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
    
}