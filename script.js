/*==========================
ELEMENTOS
==========================*/

const boton = document.getElementById("comenzar");

const inicio = document.getElementById("inicio");

const intro = document.getElementById("intro");

const escena = document.getElementById("escena");

const mensaje = document.querySelector(".mensaje");

const fade = document.getElementById("fade");

const principal = document.getElementById("principal");

const dias = document.querySelectorAll(".dia");

const cartaModal = document.getElementById("cartaModal");

const carta = document.querySelector(".carta");

const diaCarta = document.getElementById("diaCarta");

const fraseCarta = document.getElementById("fraseCarta");

const abrirRegalo = document.getElementById("abrirRegalo");

const cerrarCarta = document.getElementById("cerrarCarta");

const cerrarCartaAtras =
document.getElementById("cerrarCartaAtras");

const tituloRegalo =
document.getElementById("tituloRegalo");

const mensajeRegalo =
document.getElementById("mensajeRegalo");

const canjearRegalo =
document.getElementById("canjearRegalo");

const modalCanje =
document.getElementById("modalCanje");

const cerrarModalCanje =
document.getElementById("cerrarModalCanje");

const nombreCanjeModal =
document.getElementById("nombreCanjeModal");

const listaCanjes =
document.getElementById("listaCanjes");

const canjeVacio =
document.getElementById("canjeVacio");


/*==========================
ELEMENTOS CARTA PERSONAL
==========================*/

const abrirCartaPersonal =
document.getElementById("abrirCartaPersonal");

const modalCartaPersonal =
document.getElementById("modalCartaPersonal");

const cerrarCartaPersonal =
document.getElementById("cerrarCartaPersonal");


/*==========================
FECHA ACTUAL
==========================*/

function obtenerDiaActual(){

    const fecha = new Date();

    const mes = fecha.getMonth();

    const dia = fecha.getDate();


    if(mes < 7){

        return 0;

    }


    if(mes === 7){

        return Math.min(dia,31);

    }


    return 31;

}


const diaActual =
obtenerDiaActual();


console.log(
    "📅 Día disponible actualmente:",
    diaActual
);


/*==========================
FRASES DE AGOSTO
==========================*/

const frases = {

1:
"Hoy comienza algo especial. Recuerda siempre que eres una persona llena de luz y momentos increíbles.",

2:
"Nunca olvides que cada pequeño paso que das también cuenta. Sigue avanzando.",

3:
"Tu sonrisa tiene una forma bonita de cambiar los días de quienes te rodean.",

4:
"Hoy no es un día cualquiera... hoy celebramos la vida de alguien muy especial. ❤️",

5:
"Que nunca te falten motivos para sonreír y personas que valoren tu esencia.",

6:
"Los sueños grandes comienzan con pequeños momentos de valentía.",

7:
"Confía en ti, porque tienes más fuerza de la que imaginas.",

8:
"Cada día es una nueva oportunidad para crear recuerdos bonitos.",

9:
"Tu forma de ser hace que este mundo sea un poquito mejor.",

10:
"Nunca dejes de perseguir aquello que te hace feliz.",

11:
"Los momentos simples muchas veces terminan siendo los más especiales.",

12:
"Recuerda siempre lo mucho que vales.",

13:
"Que la vida te sorprenda con cosas bonitas.",

14:
"Sigue brillando incluso en los días difíciles.",

15:
"Cada experiencia te convierte en una versión más fuerte de ti.",

16:
"La felicidad también vive en los pequeños detalles.",

17:
"Que nunca pierdas esa alegría que te caracteriza.",

18:
"Algunas personas llegan para dejar recuerdos que duran mucho tiempo.",

19:
"Siempre habrá nuevas historias esperando ser escritas.",

20:
"Disfruta el camino, no solo la llegada.",

21:
"Tu corazón merece momentos llenos de tranquilidad y alegría.",

22:
"Recuerda celebrar tus propios logros.",

23:
"Cada día tienes una nueva oportunidad para empezar.",

24:
"Los mejores recuerdos nacen de momentos inesperados.",

25:
"Que nunca falten razones para agradecer.",

26:
"Sigue siendo esa persona auténtica que eres.",

27:
"Los detalles pequeños pueden convertirse en grandes recuerdos.",

28:
"Siempre habrá alguien deseando verte feliz.",

29:
"Que la vida te regale muchos motivos para sonreír.",

30:
"Gracias por permitir que un pequeño detalle forme parte de tu historia.",

31:
"Este mes fue creado para recordarte lo especial que eres."

};


/*==========================
REGALOS ESPECIALES
==========================*/

const regalos = {

4:{

titulo:
"🎂 Feliz cumpleaños, Day ❤️",

mensaje:
`Hoy es un día muy especial.

Esta carta fue creada especialmente para ti, para recordarte lo importante que eres.

🎟️ Tienes un canje especial esperándote.`

},

10:{

titulo:
"🎁 Un pequeño detalle para ti",

mensaje:
`No hace falta esperar una fecha especial para regalar un momento bonito.

Esta pequeña sorpresa está esperando por ti. ❤️

Cuando quieras disfrutarla, puedes hacerla tuya.`

},

24:{

titulo:
"🌙 Una noche especial te espera",

mensaje:
`Hay momentos que se disfrutan más cuando se comparten.

Por eso, esta sorpresa es una invitación a disfrutar una noche especial, llena de conversación, comida rica y un momento para recordar. ❤️

Cuando quieras, puedes canjearla.`

},

31:{

titulo:
"❤️ El final de este mes tan maravilloso",

mensaje:
`Llegaste hasta el último día. ❤️

Este pequeño calendario fue creado para acompañarte durante todo este mes y dejarte un detalle diferente en cada momento.

Y como no quería que terminara simplemente aquí...

quisiera compartir un momento contigo.

🎟️ Este último canje es para ti.`

}

};


/*==========================
INICIO EXPERIENCIA
==========================*/

if(boton){

    boton.addEventListener("click",()=>{

        boton.disabled=true;

        inicio.style.opacity="0";


        setTimeout(()=>{

            inicio.style.display="none";

            escena.classList.add("mostrar");

        },3000);


        setTimeout(()=>{

            mensaje.classList.add("mostrar");

        },5000);


        setTimeout(()=>{

            fade.classList.add("mostrar");

        },12000);


        setTimeout(()=>{

            escena.style.display="none";

            principal.classList.add("mostrar");

        },15000);


        setTimeout(()=>{

            fade.classList.remove("mostrar");

        },17000);

    });

}


/*==========================
CONTROL DEL CALENDARIO
==========================*/

dias.forEach(dia=>{

    const numero =
    Number(dia.dataset.dia);


    if(numero > diaActual){

        dia.classList.add("bloqueado");

    }

    else{

        dia.classList.add("desbloqueado");

    }


    dia.addEventListener("click",()=>{

        if(numero > diaActual){

            return;

        }

        abrirCarta(numero);

    });

});


/*==========================
ABRIR CARTA DE UN DIA
==========================*/

function abrirCarta(numero){

    diaCarta.innerHTML =
    "Día " + numero + " ❤️";


    fraseCarta.innerHTML =
    frases[numero] || "";


    carta.classList.remove("girar");


    if(regalos[numero]){

        abrirRegalo.style.display="block";

    }

    else{

        abrirRegalo.style.display="none";

    }


    canjearRegalo.style.display="none";


    cartaModal.classList.add("mostrar");

}


/*==========================
ABRIR SORPRESA
==========================*/

if(abrirRegalo){

    abrirRegalo.addEventListener("click",()=>{

        const numero =
        Number(
            diaCarta.innerHTML
            .replace("Día ","")
            .replace(" ❤️","")
        );


        if(!regalos[numero]){

            return;

        }


        tituloRegalo.innerHTML =
        regalos[numero].titulo;


        mensajeRegalo.innerHTML =
        regalos[numero].mensaje;


        carta.classList.add("girar");


        canjearRegalo.style.display="block";

    });

}


/*==========================
CERRAR CARTA DE UN DIA
==========================*/

function cerrarLaCarta(e){

    if(e){

        e.preventDefault();

        e.stopPropagation();

    }


    carta.classList.remove("girar");

    cartaModal.classList.remove("mostrar");

    abrirRegalo.style.display="block";

    canjearRegalo.style.display="none";

}


if(cerrarCarta){

    cerrarCarta.addEventListener(
        "click",
        cerrarLaCarta
    );

}


if(cerrarCartaAtras){

    cerrarCartaAtras.addEventListener(
        "click",
        cerrarLaCarta
    );

}


/*==========================
CANJEAR SORPRESA
==========================*/

if(canjearRegalo){

    canjearRegalo.addEventListener("click",()=>{

        const numero =
        Number(
            diaCarta.innerHTML
            .replace("Día ","")
            .replace(" ❤️","")
        );


        if(!regalos[numero]){

            return;

        }


        const nombre =
        regalos[numero].titulo;


        const mensajeCorreo =
        "Day ha solicitado una de las sorpresas de tu regalo.";


        nombreCanjeModal.innerHTML =
        nombre;


        guardarCanje(
            numero,
            nombre
        );


        enviarCorreoCanje(
            numero,
            nombre,
            mensajeCorreo
        );


        carta.classList.remove("girar");

        cartaModal.classList.remove("mostrar");


        modalCanje.classList.add("mostrar");

    });

}


/*==========================
ENVIAR EMAIL DEL CANJE
==========================*/

function enviarCorreoCanje(numero,nombre,mensaje){

    if(typeof emailjs === "undefined"){

        console.error(
            "EmailJS no está disponible."
        );

        return;

    }


    const parametros = {

        canje: nombre,

        dia: numero,

        mensaje: mensaje

    };


    emailjs.send(
        "service_yzqmr9c",
        "template_r0dhvp4",
        parametros
    )
    .then((respuesta)=>{

        console.log(
            "✅ Canje enviado correctamente:",
            respuesta.status,
            respuesta.text
        );

    })
    .catch((error)=>{

        console.error(
            "❌ Error enviando el canje:",
            error
        );

    });

}


/*==========================
GUARDAR CANJE
==========================*/

function guardarCanje(numero,nombre){

    const existente =
    document.querySelector(
        '.canje-guardado[data-dia="' + numero + '"]'
    );


    if(existente){

        return;

    }


    if(canjeVacio){

        canjeVacio.style.display="none";

    }


    const nuevoCanje =
    document.createElement("div");


    nuevoCanje.className =
    "canje-guardado";


    nuevoCanje.dataset.dia =
    numero;


    nuevoCanje.innerHTML = `

        <div class="canje-icono">
            🎟️
        </div>

        <h3>
            ${nombre}
        </h3>

        <p>
            Esta sorpresa ha sido guardada especialmente para ti.
            <br>
            Cuando llegue el momento perfecto,
            podrás disfrutarla. ❤️
        </p>

        <div class="estado-canje">
            💖 Canje seleccionado
        </div>

    `;


    listaCanjes.prepend(
        nuevoCanje
    );


    nuevoCanje.classList.add(
        "canjesello"
    );

}


/*==========================
CERRAR MODAL DE CANJE
==========================*/

if(cerrarModalCanje){

    cerrarModalCanje.addEventListener(
        "click",
        ()=>{

            modalCanje.classList.remove(
                "mostrar"
            );

        }
    );

}


if(modalCanje){

    modalCanje.addEventListener(
        "click",
        (e)=>{

            if(e.target === modalCanje){

                modalCanje.classList.remove(
                    "mostrar"
                );

            }

        }
    );

}


/*==========================
CARTA PERSONAL
==========================*/

if(abrirCartaPersonal){

    abrirCartaPersonal.addEventListener(
        "click",
        ()=>{

            modalCartaPersonal.classList.add(
                "mostrar"
            );


            const contenido =
            modalCartaPersonal.querySelector(
                ".carta-personal-contenido"
            );


            if(contenido){

                contenido.scrollTop=0;

            }

        }
    );

}


/*==========================
CERRAR CARTA PERSONAL
==========================*/

function cerrarCartaPersonalFuncion(){

    modalCartaPersonal.classList.remove(
        "mostrar"
    );

}


if(cerrarCartaPersonal){

    cerrarCartaPersonal.addEventListener(
        "click",
        cerrarCartaPersonalFuncion
    );

}


if(modalCartaPersonal){

    modalCartaPersonal.addEventListener(
        "click",
        (e)=>{

            if(e.target === modalCartaPersonal){

                cerrarCartaPersonalFuncion();

            }

        }
    );

}


/*==========================
TECLA ESC
==========================*/

document.addEventListener(
    "keydown",
    (e)=>{

        if(e.key === "Escape"){

            if(modalCanje){

                modalCanje.classList.remove(
                    "mostrar"
                );

            }


            if(cartaModal){

                cartaModal.classList.remove(
                    "mostrar"
                );

            }


            if(modalCartaPersonal){

                modalCartaPersonal.classList.remove(
                    "mostrar"
                );

            }

        }

    }
);


/*==========================
RECUERDOS
==========================*/

function abrirRecuerdo(){

    console.log(
        "Aquí aparecerán fotos y videos especiales"
    );

}


/*==========================
FIN
==========================*/