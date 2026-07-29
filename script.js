const boton = document.getElementById("comenzar");

const inicio = document.getElementById("inicio");

const transicion = document.getElementById("transicion");

const principal = document.getElementById("principal");


boton.onclick = function(){

    inicio.style.display="none";

    transicion.style.display="block";


    setTimeout(function(){

        transicion.style.display="none";

        principal.style.display="block";

    },3000);


}